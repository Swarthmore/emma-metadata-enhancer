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
import { remediationStatusOptions } from "../field-options";

export const RemediationStatus = () => {
  const form = useForm();

  return (
    <FormField
      control={form.control}
      name="remediation-status"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Remediation Status</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Remediation status" />
              </SelectTrigger>
              <SelectContent>
                {remediationStatusOptions.map(({ value, label }) => (
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
