import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const SeriesPosition = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="series-position"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Series position</FormLabel>
                    <FormControl>
                        <Input placeholder="Series position" {...field} />
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


