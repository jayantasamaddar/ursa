import styled from "@emotion/styled";
import { FC, ReactElement, useState, useCallback, useMemo } from "react";

type Layout = "vertical" | "horizontal";

interface TabsProps {
  className?: string;
  layout?: Layout;
  items: {
    label: string;
    content?: ReactElement;
    active?: boolean;
  }[];
}

const UrsaTabs: FC<TabsProps> = ({
  className,
  items,
  layout,
}): ReactElement => {
  /************************************************************************/
  // Initialize State and Memoize activeTab
  /************************************************************************/
  const activeTab = useMemo(() => {
    const indx = items.findIndex((item) => item.active ?? false);
    return indx >= 0 ? indx : 0;
  }, [items]);

  const [data, setData] = useState(
    items.map((item, index) => ({
      ...item,
      active: index === activeTab ? true : false,
    })) ?? []
  );

  console.log(data);

  /************************************************************************/
  // Handle Tabs Click
  /************************************************************************/

  const toggleActive = useCallback(
    (indx: number) =>
      setData((prev) => [
        ...prev.slice(0, indx).map((item) => ({ ...item, active: false })),
        { ...prev[indx], active: !prev[indx].active },
        ...prev.slice(indx + 1).map((item) => ({ ...item, active: false })),
      ]),
    []
  );

  /************************************************************************/
  // Return Tabs JSX
  /************************************************************************/

  return (
    <div className={`Ursa-Tabs ${className || ""}`}>
      <div className={`Ursa-TabsHead ${layout !== "vertical" ? "flex" : ""}`}>
        {data?.map(({ label, active }, indx) => (
          <div
            className={`Ursa-TabHeadItem-${indx}`}
            onClick={() => (!active ? toggleActive(indx) : null)}
            key={indx}
          >
            <h4 className="Ursa-TabLabel">{label}</h4>
          </div>
        ))}
      </div>
      <div className="Ursa-TabsContent">
        {data[data?.findIndex((item) => item.active)]?.content}
      </div>
    </div>
  );
};

export const Tabs = styled(UrsaTabs)(
  ({ theme: { color }, layout, items }) => `
    display: flex;
    flex-direction: ${layout === "vertical" ? "row" : "column"};
    align-items: flex-start;
    justify-items: flex-start;
    gap: 4px;

    .Ursa-TabsHead {
      display: ${layout === "vertical" ? "block" : "flex"};
      ${items.map(
        (item, indx) =>
          `
        .Ursa-TabHeadItem-${indx} {
          display: flex;
          cursor: pointer;
          padding: 0.75rem;
          border-bottom: ${
            item.active ? `1px solid ${color["--ursa-border-primary"]}` : "none"
          };
          
          & > h4 {
            color: ${item.active ? color["--ursa-tab-selected"] : "inherit"};
          }
        }
        `
      )}
    }

    .Ursa-TabsContent {
      display: flex;
      padding: 0.75rem;
    } 
  `
);
