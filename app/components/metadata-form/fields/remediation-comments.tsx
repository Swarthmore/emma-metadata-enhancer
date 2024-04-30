import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const RemediationComments = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="remediationComments"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Remediation Comments</FormLabel>
                    <FormControl>
                        <Input placeholder="remediation comments" {...field} />
                    </FormControl>
                    <FormDescription>
                      Any comments about the remediation of this document.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
