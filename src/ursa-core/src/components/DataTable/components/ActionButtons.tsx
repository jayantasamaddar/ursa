import {
  FC,
  ReactElement,
  MouseEvent,
  Fragment,
  useState,
  useEffect,
  useRef,
} from 'react';

interface Buttons {
  name: string;
  title: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

interface Props {
  buttons: {
    actionButtons: Buttons[];
    truncateAfter?: number;
    truncateLabel?: string;
  };
}

const ActionButtons: FC<Props> = ({
  buttons: { actionButtons: buttons, truncateAfter, truncateLabel },
}): ReactElement => {
  /*************************************************************************/
  // Initialize State
  /*************************************************************************/
  const [toggle, setToggle] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);

  /*************************************************************************/
  // Handle Events
  /*************************************************************************/
  const toggleMore = () => setToggle(prev => !prev);

  useEffect(() => {
    const handler = (event: MouseEvent<HTMLElement>) => {
      if (!actionsRef.current?.contains(event.target as HTMLElement))
        setToggle(false);
      else return;
    };
    document.addEventListener('click', (e: Event) => handler);
    return () => document.removeEventListener('click', (e: Event) => handler);
  }, [toggle]);

  /*************************************************************************/
  // Return JSX
  /*************************************************************************/

  return (
    <Fragment>
      {buttons?.slice(0, truncateAfter).map((button, index) => {
        return (
          <button
            className="action-button p-10"
            onClick={button.onClick}
            key={
              button.title
                .replace(/[^a-zA-Z ]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase() || index
            }
          >
            {button.title}
          </button>
        );
      })}

      {buttons?.length > (truncateAfter ?? 10) && (
        <div className="more-actions flex-col relative" ref={actionsRef}>
          <button
            className="action-button flex justify-center items-center gap-10 p-10 rounded-tr-2xl w-full h-full"
            onClick={toggleMore}
          >
            <span className="button-title text-base">{truncateLabel}</span>
            <span className="arrow">
              <i className="fas fa-caret-down"></i>
            </span>
          </button>
          <ul
            className={`data-table-actions absolute w-max h-full${
              !toggle && ' hidden'
            }`}
          >
            {buttons
              .slice(truncateAfter)
              .map(({ title, name, onClick }, index) => {
                return (
                  <li
                    className="text-base align-middle"
                    key={
                      name ||
                      title
                        .replace(/[^a-zA-Z ]/g, '')
                        .replace(/\s+/g, '-')
                        .toLowerCase() ||
                      index
                    }
                  >
                    <button
                      className="action-button p-20 border w-[300px] text-left"
                      onClick={onClick}
                    >
                      {title}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default ActionButtons;
