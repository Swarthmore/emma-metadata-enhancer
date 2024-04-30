import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const RemediatedBy = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="remediated-by"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Remediated By</FormLabel>
                    <FormControl>
                        <Input placeholder="Remediated by" {...field} />
                    </FormControl>
                    <FormDescription>
                      Who remediated the document?
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}


