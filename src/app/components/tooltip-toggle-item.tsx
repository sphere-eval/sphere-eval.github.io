import * as React from 'react';
import { ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
 
interface TooltipToggleItemProps {
  value: string;
  tooltipContent: string;
}

const TooltipToggleItem = ({ value, tooltipContent }: TooltipToggleItemProps) => {
    return (
    <ToggleGroupItem value={value} aria-label={`Toggle ${value}`}>
      <TooltipProvider>
        <Tooltip delayDuration={500}>
          <TooltipTrigger asChild>
            <p>{value}</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipContent}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </ToggleGroupItem>
  );
};

TooltipToggleItem.displayName = 'TooltipToggleItem';
export { TooltipToggleItem };