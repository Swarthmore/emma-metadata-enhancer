import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { accessibilityHazardsOptions } from "../field-options";

export const AccessibilityHazards = () => {
  const form = useForm();

  return (
    <FormField
      control={form.control}
      name="accessibility-hazards"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Accessibility Hazards</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select accessibility hazards" />
              </SelectTrigger>
              <SelectContent>
                {accessibilityHazardsOptions.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription>???</FormDescription>
        </FormItem>
      )}
    />
  );
};


