import { FC, ReactElement, useState } from "react";
import styled from "@emotion/styled";
import { ChevronUpMinor, ChevronDownMinor } from "@ursa/icons";
import { Icon } from "../Icon";

export interface AccordionProps {
  className?: string;
  items: {
    label: string;
    content?: ReactElement;
    active?: boolean;
  }[];
}

const UrsaAccordion: FC<AccordionProps> = ({
  className,
  items,
}): ReactElement => {
  const [data, setData] = useState(
    items?.map((item) => ({ ...item, active: item.active ?? false })) ?? []
  );

  const toggleActive = (indx: number) =>
    setData((prev) => [
      ...prev.slice(0, indx),
      { ...prev[indx], active: !prev[indx].active },
      ...prev.slice(indx + 1),
    ]);

  return (
    <div className={`UrsaAccordion ${className || ""}`}>
      {data?.map(({ label, content, active }, indx) => (
        <div className="UrsaAccordionItem" key={indx}>
          <div className="UrsaAccordionHead" onClick={() => toggleActive(indx)}>
            <h4>{label}</h4>
            {active ? (
              <Icon source={ChevronUpMinor} size="large" />
            ) : (
              <Icon source={ChevronDownMinor} size="large" />
            )}
          </div>
          {active && <div className="UrsaAccordionContent">{content}</div>}
        </div>
      ))}
    </div>
  );
};

export const Accordion = styled(UrsaAccordion)(
  ({ theme: { color } }) => `
        .UrsaAccordionHead {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: 4px;
            border-bottom: 1px solid ${color["--ursa-border-primary"]};

            h4 {
              flex-grow: 1;
              color: ${color["--ursa-text-primary"]};
            }
        }
        .UrsaAccordionContent {
            display: flex;
            color: ${color["--ursa-text-primary"]};
            padding: 20px 4px;
        }
    `
);
