import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const SeriesTitle = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="series-title"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Series Title</FormLabel>
                    <FormControl>
                        <Input placeholder="Series title" {...field} />
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



