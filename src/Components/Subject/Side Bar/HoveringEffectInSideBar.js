import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function HoveringEffectInSideBar({ display_name }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {display_name}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 0, hide: 0 }}
      overlay={renderTooltip}
    >
      <a>
        {display_name.length > 7
          ? display_name.slice(0, 8) + "..."
          : display_name}
      </a>
    </OverlayTrigger>
  );
}

export default HoveringEffectInSideBar;
