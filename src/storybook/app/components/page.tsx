import { AccordionDemo } from "./accordion-demo"
import { AlertDemo } from "./alert-demo"
import { AlertDialogDemo } from "./alert-dialog-demo"
import { AspectRatioDemo } from "./aspect-ratio-demo"
import { AvatarDemo } from "./avatar-demo"
import { BadgeDemo } from "./badge-demo"
import { BreadcrumbDemo } from "./breadcrumb-demo"
import { ButtonDemo } from "./button-demo"
import { CalendarDemo } from "./calendar-demo"
import { CardDemo } from "./card-demo"
import { CarouselDemo } from "./carousel-demo"
import { ChartDemo } from "./chart-demo"
import { CheckboxDemo } from "./checkbox-demo"
import { CollapsibleDemo } from "./collapsible-demo"
import { ComboboxDemo } from "./combobox-demo"
import { CommandDemo } from "./command-demo"
import { ComponentWrapper } from "./component-wrapper"
import { ContextMenuDemo } from "./context-menu-demo"
import { DatePickerDemo } from "./date-picker-demo"
import { DialogDemo } from "./dialog-demo"
import { DrawerDemo } from "./drawer-demo"
import { DropdownMenuDemo } from "./dropdown-menu-demo"
import { FormDemo } from "./form-demo"
import { HoverCardDemo } from "./hover-card-demo"
import { InputDemo } from "./input-demo"
import { InputOTPDemo } from "./input-otp-demo"
import { LabelDemo } from "./label-demo"
import { MenubarDemo } from "./menubar-demo"
import { NavigationMenuDemo } from "./navigation-menu-demo"
import { PaginationDemo } from "./pagination-demo"
import { PopoverDemo } from "./popover-demo"
import { ProgressDemo } from "./progress-demo"
import { RadioGroupDemo } from "./radio-group-demo"
import { ResizableDemo } from "./resizable-demo"
import { ScrollAreaDemo } from "./scroll-area-demo"
import { SelectDemo } from "./select-demo"
import { SeparatorDemo } from "./separator-demo"
import { SheetDemo } from "./sheet-demo"
import { SkeletonDemo } from "./skeleton-demo"
import { SliderDemo } from "./slider-demo"
import { SonnerDemo } from "./sonner-demo"
import { SwitchDemo } from "./switch-demo"
import { TableDemo } from "./table-demo"
import { TabsDemo } from "./tabs-demo"
import { TextareaDemo } from "./textarea-demo"
import { ToggleDemo } from "./toggle-demo"
import { ToggleGroupDemo } from "./toggle-group-demo"
import { TooltipDemo } from "./tooltip-demo"

export function Page() {
	return (
		<div className="@container grid flex-1 gap-4 p-4">
			<ComponentWrapper name="chart" className="w-full">
				<ChartDemo />
			</ComponentWrapper>
			<ComponentWrapper name="accordion">
				<AccordionDemo />
			</ComponentWrapper>
			<ComponentWrapper name="alert">
				<AlertDemo />
			</ComponentWrapper>
			<ComponentWrapper name="alert-dialog">
				<AlertDialogDemo />
			</ComponentWrapper>
			<ComponentWrapper name="aspect-ratio">
				<AspectRatioDemo />
			</ComponentWrapper>
			<ComponentWrapper name="avatar">
				<AvatarDemo />
			</ComponentWrapper>
			<ComponentWrapper name="badge">
				<BadgeDemo />
			</ComponentWrapper>
			<ComponentWrapper name="breadcrumb">
				<BreadcrumbDemo />
			</ComponentWrapper>
			<ComponentWrapper name="button">
				<ButtonDemo />
			</ComponentWrapper>
			<ComponentWrapper name="calendar">
				<CalendarDemo />
			</ComponentWrapper>
			<ComponentWrapper name="card">
				<CardDemo />
			</ComponentWrapper>
			<ComponentWrapper name="carousel">
				<CarouselDemo />
			</ComponentWrapper>
			<ComponentWrapper name="checkbox">
				<CheckboxDemo />
			</ComponentWrapper>
			<ComponentWrapper name="collapsible">
				<CollapsibleDemo />
			</ComponentWrapper>
			<ComponentWrapper name="combobox">
				<ComboboxDemo />
			</ComponentWrapper>
			<ComponentWrapper name="command">
				<CommandDemo />
			</ComponentWrapper>
			<ComponentWrapper name="context-menu">
				<ContextMenuDemo />
			</ComponentWrapper>
			<ComponentWrapper name="date-picker">
				<DatePickerDemo />
			</ComponentWrapper>
			<ComponentWrapper name="dialog">
				<DialogDemo />
			</ComponentWrapper>
			<ComponentWrapper name="drawer">
				<DrawerDemo />
			</ComponentWrapper>
			<ComponentWrapper name="dropdown-menu">
				<DropdownMenuDemo />
			</ComponentWrapper>
			<ComponentWrapper name="form">
				<FormDemo />
			</ComponentWrapper>
			<ComponentWrapper name="hover-card">
				<HoverCardDemo />
			</ComponentWrapper>
			<ComponentWrapper name="input">
				<InputDemo />
			</ComponentWrapper>
			<ComponentWrapper name="input-otp">
				<InputOTPDemo />
			</ComponentWrapper>
			<ComponentWrapper name="label">
				<LabelDemo />
			</ComponentWrapper>
			<ComponentWrapper name="menubar">
				<MenubarDemo />
			</ComponentWrapper>
			<ComponentWrapper name="navigation-menu">
				<NavigationMenuDemo />
			</ComponentWrapper>
			<ComponentWrapper name="pagination">
				<PaginationDemo />
			</ComponentWrapper>
			<ComponentWrapper name="popover">
				<PopoverDemo />
			</ComponentWrapper>
			<ComponentWrapper name="progress">
				<ProgressDemo />
			</ComponentWrapper>
			<ComponentWrapper name="radio-group">
				<RadioGroupDemo />
			</ComponentWrapper>
			<ComponentWrapper name="resizable">
				<ResizableDemo />
			</ComponentWrapper>
			<ComponentWrapper name="scroll-area">
				<ScrollAreaDemo />
			</ComponentWrapper>
			<ComponentWrapper name="select">
				<SelectDemo />
			</ComponentWrapper>
			<ComponentWrapper name="separator">
				<SeparatorDemo />
			</ComponentWrapper>
			<ComponentWrapper name="sheet">
				<SheetDemo />
			</ComponentWrapper>
			<ComponentWrapper name="skeleton">
				<SkeletonDemo />
			</ComponentWrapper>
			<ComponentWrapper name="slider">
				<SliderDemo />
			</ComponentWrapper>
			<ComponentWrapper name="sonner">
				<SonnerDemo />
			</ComponentWrapper>
			<ComponentWrapper name="switch">
				<SwitchDemo />
			</ComponentWrapper>
			<ComponentWrapper name="table">
				<TableDemo />
			</ComponentWrapper>
			<ComponentWrapper name="tabs">
				<TabsDemo />
			</ComponentWrapper>
			<ComponentWrapper name="textarea">
				<TextareaDemo />
			</ComponentWrapper>
			<ComponentWrapper name="toggle">
				<ToggleDemo />
			</ComponentWrapper>
			<ComponentWrapper name="toggle-group">
				<ToggleGroupDemo />
			</ComponentWrapper>
			<ComponentWrapper name="tooltip">
				<TooltipDemo />
			</ComponentWrapper>
		</div>
	)
}
