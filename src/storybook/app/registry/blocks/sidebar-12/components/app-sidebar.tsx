
import { Calendars } from "./calendars"
import { DatePicker } from "./date-picker"
import { NavUser } from "./nav-user"
import { Plus } from "lucide-react"
import * as React from "react"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarSeparator,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	calendars: [
		{
			name: "My Calendars",
			items: ["Personal", "Work", "Family"],
		},
		{
			name: "Favorites",
			items: ["Holidays", "Birthdays"],
		},
		{
			name: "Other",
			items: ["Travel", "Reminders", "Deadlines"],
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader className="border-sidebar-border h-16 border-b">
				<NavUser user={data.user} />
			</SidebarHeader>
			<SidebarContent>
				<DatePicker />
				<SidebarSeparator className="mx-0" />
				<Calendars calendars={data.calendars} />
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<Plus />
							<span>New Calendar</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
