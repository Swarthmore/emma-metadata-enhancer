import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const SeriesTitle = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="seriesTitle"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Series title</FormLabel>
                    <FormControl>
                        <Input placeholder="series title" {...field} />
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



