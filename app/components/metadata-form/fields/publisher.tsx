import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const Publisher = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="publisher"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Publishers</FormLabel>
                    <FormControl>
                        <Input placeholder="publisher" {...field} />
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


