import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const AccessibilitySummary = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="accessibilitySummary"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Accessibility summary</FormLabel>
                    <FormControl>
                        <Input placeholder="accessibility summary" {...field} />
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

