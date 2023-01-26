import * as TooltipPrimitive from '@radix-ui/react-tooltip';

type TooltipProps = {
  children: React.ReactNode;
  content: string;
} & Pick<
  React.ComponentProps<typeof TooltipPrimitive.Content>,
  'side' | 'align'
>;

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {props.children}
      </TooltipPrimitive.Trigger>

      {typeof window !== 'undefined' && (
        <TooltipPrimitive.Portal
          container={document.getElementsByTagName('main')[0]}
        >
          <TooltipPrimitive.Content
            side={props.side}
            align={props.align}
            className="transform-gpu animate-scale rounded-lg bg-black px-2.5 py-1.5 font-sans text-sm text-white shadow-lg"
            sideOffset={8}
          >
            {props.content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      )}
    </TooltipPrimitive.Root>
  );
}
