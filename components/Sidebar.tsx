import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import {LayoutDashboard,Newspaper,Folders,CreditCard,Settings,User} from "lucide-react"
  
const SideBar = () => {
    return ( 
        <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                       <LayoutDashboard className="mr-2 h-4 w-4" />
                       <Link href="/" >Dashboard</Link>
                    </CommandItem>
                    <CommandItem>
                      <Newspaper className="mr-2 h-4 w-4" />
                      <Link href="/posts">Posts</Link>
                    </CommandItem>
                    <CommandItem>                        
                      <Folders className="mr-2 h-4 w-4" />
                      <Link href="#" >Categories</Link>
                    </CommandItem>
                </CommandGroup>
                 <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link href="#" >Profile</Link>
                        <CommandShortcut></CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <Link href="#" >Billing</Link>
                        <CommandShortcut></CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <Link href="#" >Settings</Link>
                        <CommandShortcut></CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
 );
}
 
export default SideBar;