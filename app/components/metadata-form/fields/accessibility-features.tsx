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
import { typeOptions } from "../field-options";

export const AccessibilityFeatures = () => {
  const form = useForm();

  return (
    <FormField
      control={form.control}
      name="accessibility-features"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Accessibility Features</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select accessibility features" />
              </SelectTrigger>
              <SelectContent>
                {typeOptions.map(({ value, label }) => (
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


