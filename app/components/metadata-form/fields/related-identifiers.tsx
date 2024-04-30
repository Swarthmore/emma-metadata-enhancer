import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const RelatedIdentifiers = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="relatedIdentifiers"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Related identifiers</FormLabel>
                    <FormControl>
                        <Input placeholder="related identifiers" {...field} />
                    </FormControl>
                    <FormDescription>
                      ???
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}


