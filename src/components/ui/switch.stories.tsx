import { Label } from "./label"
import { Switch } from "./switch"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Switch> = {
	title: "shadcn/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Switch>

/**
 * Basic switch control
 */
export const Default: Story = {
	render: () => <Switch />,
}

/**
 * Checked switch
 */
export const Checked: Story = {
	render: () => <Switch defaultChecked />,
}

/**
 * Disabled switch in unchecked state
 */
export const DisabledUnchecked: Story = {
	render: () => <Switch disabled />,
}

/**
 * Disabled switch in checked state
 */
export const DisabledChecked: Story = {
	render: () => <Switch disabled defaultChecked />,
}

/**
 * Switch with label
 */
export const WithLabel: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Switch id="airplane-mode" />
			<Label htmlFor="airplane-mode">Airplane Mode</Label>
		</div>
	),
}

/**
 * Different switch color variations
 */
export const Colors: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center space-x-2">
				<Switch defaultChecked />
				<Label>Default</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
				<Label>Blue</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Switch defaultChecked className="data-[state=checked]:bg-green-600" />
				<Label>Green</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Switch defaultChecked className="data-[state=checked]:bg-red-600" />
				<Label>Red</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Switch defaultChecked className="data-[state=checked]:bg-purple-600" />
				<Label>Purple</Label>
			</div>
		</div>
	),
}

/**
 * Different switch sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center space-x-2">
				<Switch className="h-[0.9rem] w-[1.75rem]" defaultChecked />
				<Label>Small</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Switch defaultChecked />
				<Label>Default</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Switch className="h-[1.5rem] w-[3rem]" defaultChecked />
				<Label>Large</Label>
			</div>
		</div>
	),
}

/**
 * Controlled switch
 */
export const Controlled: Story = {
	render: function Render() {
		const [checked, setChecked] = useState(false)

		return (
			<div className="flex flex-col space-y-4">
				<div className="flex items-center space-x-2">
					<Switch checked={checked} onCheckedChange={setChecked} />
					<Label>{checked ? "On" : "Off"}</Label>
				</div>
				<p className="text-sm text-muted-foreground">
					The switch is {checked ? "checked" : "unchecked"}
				</p>
			</div>
		)
	},
}

/**
 * Switch in a form with multiple settings
 */
export const InSettings: Story = {
	render: function Render() {
		const [settings, setSettings] = useState({
			notifications: true,
			emailAlerts: false,
			marketingEmails: false,
			darkMode: true,
		})

		const toggleSetting = (setting: keyof typeof settings) => {
			setSettings(prev => ({
				...prev,
				[setting]: !prev[setting],
			}))
		}

		return (
			<div className="w-[300px] space-y-6 rounded-lg border p-4">
				<div className="space-y-2">
					<h3 className="text-lg font-medium">Settings</h3>
					<p className="text-sm text-muted-foreground">
						Manage your notification preferences.
					</p>
				</div>
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label htmlFor="notifications">Push Notifications</Label>
							<p className="text-xs text-muted-foreground">
								Receive notifications when someone mentions you.
							</p>
						</div>
						<Switch
							id="notifications"
							checked={settings.notifications}
							onCheckedChange={() => toggleSetting("notifications")}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label htmlFor="emails">Email Alerts</Label>
							<p className="text-xs text-muted-foreground">
								Receive emails for important updates.
							</p>
						</div>
						<Switch
							id="emails"
							checked={settings.emailAlerts}
							onCheckedChange={() => toggleSetting("emailAlerts")}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label htmlFor="marketing">Marketing Emails</Label>
							<p className="text-xs text-muted-foreground">
								Receive emails about new products and features.
							</p>
						</div>
						<Switch
							id="marketing"
							checked={settings.marketingEmails}
							onCheckedChange={() => toggleSetting("marketingEmails")}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label htmlFor="darkMode">Dark Mode</Label>
							<p className="text-xs text-muted-foreground">
								Use dark theme for the interface.
							</p>
						</div>
						<Switch
							id="darkMode"
							checked={settings.darkMode}
							onCheckedChange={() => toggleSetting("darkMode")}
						/>
					</div>
				</div>
			</div>
		)
	},
}
