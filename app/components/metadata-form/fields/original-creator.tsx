import { FormControl, FormDescription, FormField, FormMessage, FormItem, FormLabel } from '../../ui/form'
import { Input } from "../../ui/input"
import { useForm } from "react-hook-form"

export const OriginalCreator = () => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="originalCreator"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Original Creator</FormLabel>
                    <FormControl>
                        <Input placeholder="original creator" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is the original creator of the document.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )

}
