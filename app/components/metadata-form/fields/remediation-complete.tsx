import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from "react-hook-form"

export const RemediationComplete = () => {
    
    const form = useForm()

    return (
       <FormField 
        control={form.control}
        name="remediation-complete"
        render={({ field }) => (
            <FormItem>
                <FormLabel>Remediation complete</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Is the remediation complete?" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="Yes">Yes</SelectItem>
                        </SelectContent>
                    </FormControl>
                </Select>
                <FormDescription>
                    Field description
                </FormDescription>
            </FormItem>
        )}
       /> 
    )
}