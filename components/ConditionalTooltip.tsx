import { Tooltip } from './Tooltip';

type ConditionalTooltipProps = {
  visible: boolean;
} & React.ComponentProps<typeof Tooltip>;

export function ConditionalTooltip(props: ConditionalTooltipProps) {
  const { visible, children, ...tooltipProps } = props;

  if (!visible) {
    return <>{children}</>;
  }

  return <Tooltip {...tooltipProps}>{children}</Tooltip>;
}
