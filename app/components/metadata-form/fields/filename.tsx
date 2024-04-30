import { useForm } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"

export const Filename = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="filename"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>File Name</FormLabel>
                    <FormControl>
                        <Input placeholder="filename" {...field} />
                    </FormControl>
                    <FormDescription>
                        The filename of the document.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
