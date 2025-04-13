# ShadCN Diff Report
Generated on Sun Apr 13 2025 12:02:23 GMT-0400 (Eastern Daylight Time)


## accordion.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/accordion.tsx	2025-04-13 02:56:16
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/accordion.tsx	2025-04-13 12:02:21
@@ -1,6 +1,8 @@
+"use client"
+
+import * as React from "react"
 import * as AccordionPrimitive from "@radix-ui/react-accordion"
 import { ChevronDownIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -34,7 +36,7 @@
 				data-slot="accordion-trigger"
 				className={cn(
 					"focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
-					className,
+          className
         )}
         {...props}
       >

\`\`\`
_Error generating diff._


## alert-dialog.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/alert-dialog.tsx	2025-04-13 02:57:44
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/alert-dialog.tsx	2025-04-13 12:02:21
@@ -1,10 +1,10 @@
 "use client"
 
-import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
 import * as React from "react"
+import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
 
-import { buttonVariants } from "@/components/ui/button"
 import { cn } from "@/lib/utils"
+import { buttonVariants } from "@/registry/new-york-v4/ui/button"
 
 function AlertDialog({
   ...props
@@ -37,7 +37,7 @@
 			data-slot="alert-dialog-overlay"
 			className={cn(
 				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
-				className,
+        className
       )}
       {...props}
     />
@@ -55,7 +55,7 @@
 				data-slot="alert-dialog-content"
 				className={cn(
 					"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
-					className,
+          className
         )}
         {...props}
       />
@@ -85,7 +85,7 @@
 			data-slot="alert-dialog-footer"
 			className={cn(
 				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## alert.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/alert.tsx	2025-03-19 02:35:18
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/alert.tsx	2025-04-13 12:02:21
@@ -1,5 +1,5 @@
-import { cva, type VariantProps } from "class-variance-authority"
 import * as React from "react"
+import { cva, type VariantProps } from "class-variance-authority"
 
 import { cn } from "@/lib/utils"
 
@@ -16,7 +16,7 @@
 		defaultVariants: {
 			variant: "default",
 		},
-	},
+  }
 )
 
 function Alert({
@@ -40,7 +40,7 @@
 			data-slot="alert-title"
 			className={cn(
 				"col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
-				className,
+        className
       )}
       {...props}
     />
@@ -56,7 +56,7 @@
 			data-slot="alert-description"
 			className={cn(
 				"text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## aspect-ratio.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/aspect-ratio.tsx	2025-03-19 02:35:18
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/aspect-ratio.tsx	2025-04-13 12:02:21
@@ -1,3 +1,5 @@
+"use client"
+
 import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"
 
 function AspectRatio({

\`\`\`
_Error generating diff._


## avatar.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/avatar.tsx	2025-03-19 02:35:19
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/avatar.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as AvatarPrimitive from "@radix-ui/react-avatar"
 import * as React from "react"
+import * as AvatarPrimitive from "@radix-ui/react-avatar"
 
 import { cn } from "@/lib/utils"
 
@@ -14,7 +14,7 @@
 			data-slot="avatar"
 			className={cn(
 				"relative flex size-8 shrink-0 overflow-hidden rounded-full",
-				className,
+        className
       )}
       {...props}
     />
@@ -43,7 +43,7 @@
 			data-slot="avatar-fallback"
 			className={cn(
 				"bg-muted flex size-full items-center justify-center rounded-full",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## badge.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/badge.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/badge.tsx	2025-04-13 12:02:21
@@ -1,6 +1,6 @@
+import * as React from "react"
 import { Slot } from "@radix-ui/react-slot"
 import { cva, type VariantProps } from "class-variance-authority"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -14,7 +14,7 @@
 				secondary:
 					"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
 				destructive:
-					"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
+          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
         outline:
           "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
       },
@@ -22,7 +22,7 @@
 		defaultVariants: {
 			variant: "default",
 		},
-	},
+  }
 )
 
 function Badge({

\`\`\`
_Error generating diff._


## breadcrumb.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/breadcrumb.tsx	2025-03-19 02:35:20
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/breadcrumb.tsx	2025-04-13 12:02:21
@@ -1,6 +1,6 @@
+import * as React from "react"
 import { Slot } from "@radix-ui/react-slot"
 import { ChevronRight, MoreHorizontal } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -14,7 +14,7 @@
 			data-slot="breadcrumb-list"
 			className={cn(
 				"text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## button.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/button.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/button.tsx	2025-04-13 12:02:21
@@ -1,6 +1,6 @@
+import * as React from "react"
 import { Slot } from "@radix-ui/react-slot"
 import { cva, type VariantProps } from "class-variance-authority"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -32,7 +32,7 @@
 			variant: "default",
 			size: "default",
 		},
-	},
+  }
 )
 
 function Button({

\`\`\`
_Error generating diff._


## calendar.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/calendar.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/calendar.tsx	2025-04-13 12:02:21
@@ -1,9 +1,11 @@
-import { ChevronLeft, ChevronRight } from "lucide-react"
+"use client"
+
 import * as React from "react"
+import { ChevronLeft, ChevronRight } from "lucide-react"
 import { DayPicker } from "react-day-picker"
 
-import { buttonVariants } from "@/components/ui/button"
 import { cn } from "@/lib/utils"
+import { buttonVariants } from "@/registry/new-york-v4/ui/button"
 
 function Calendar({
   className,
@@ -23,7 +25,7 @@
 				nav: "flex items-center gap-1",
 				nav_button: cn(
 					buttonVariants({ variant: "outline" }),
-					"size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
+          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
         ),
         nav_button_previous: "absolute left-1",
         nav_button_next: "absolute right-1",
@@ -36,11 +38,11 @@
 					"relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
 					props.mode === "range"
 						? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
-						: "[&:has([aria-selected])]:rounded-md",
+            : "[&:has([aria-selected])]:rounded-md"
 				),
 				day: cn(
 					buttonVariants({ variant: "ghost" }),
-					"size-8 p-0 font-normal aria-selected:opacity-100",
+          "size-8 p-0 font-normal aria-selected:opacity-100"
         ),
         day_range_start:
           "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",

\`\`\`
_Error generating diff._


## card.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/card.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/card.tsx	2025-04-13 12:02:21
@@ -8,7 +8,7 @@
 			data-slot="card"
 			className={cn(
 				"bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
-				className,
+        className
       )}
       {...props}
     />
@@ -20,8 +20,8 @@
 		<div
 			data-slot="card-header"
 			className={cn(
-				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
-				className,
+        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
+        className
       )}
       {...props}
     />
@@ -54,7 +54,7 @@
 			data-slot="card-action"
 			className={cn(
 				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## carousel.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/carousel.tsx	2025-03-22 16:20:37
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/carousel.tsx	2025-04-13 12:02:21
@@ -1,13 +1,13 @@
 "use client"
 
+import * as React from "react"
 import useEmblaCarousel, {
 	type UseEmblaCarouselType,
 } from "embla-carousel-react"
 import { ArrowLeft, ArrowRight } from "lucide-react"
-import * as React from "react"
 
-import { Button } from "@/components/ui/button"
 import { cn } from "@/lib/utils"
+import { Button } from "@/registry/new-york-v4/ui/button"
 
 type CarouselApi = UseEmblaCarouselType[1]
 type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
@@ -56,7 +56,7 @@
 			...opts,
 			axis: orientation === "horizontal" ? "x" : "y",
 		},
-		plugins,
+    plugins
   )
   const [canScrollPrev, setCanScrollPrev] = React.useState(false)
   const [canScrollNext, setCanScrollNext] = React.useState(false)
@@ -85,7 +85,7 @@
 				scrollNext()
 			}
 		},
-		[scrollPrev, scrollNext],
+    [scrollPrev, scrollNext]
   )
 
   React.useEffect(() => {
@@ -145,7 +145,7 @@
 				className={cn(
 					"flex",
 					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
-					className,
+          className
         )}
         {...props}
       />
@@ -164,7 +164,7 @@
 			className={cn(
 				"min-w-0 shrink-0 grow-0 basis-full",
 				orientation === "horizontal" ? "pl-4" : "pt-4",
-				className,
+        className
       )}
       {...props}
     />
@@ -189,7 +189,7 @@
 				orientation === "horizontal"
 					? "top-1/2 -left-12 -translate-y-1/2"
 					: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
-				className,
+        className
       )}
       disabled={!canScrollPrev}
       onClick={scrollPrev}
@@ -219,7 +219,7 @@
 				orientation === "horizontal"
 					? "top-1/2 -right-12 -translate-y-1/2"
 					: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
-				className,
+        className
       )}
       disabled={!canScrollNext}
       onClick={scrollNext}

\`\`\`
_Error generating diff._


## chart.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/chart.tsx	2025-03-20 03:47:56
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/chart.tsx	2025-04-13 12:02:21
@@ -1,3 +1,5 @@
+"use client"
+
 import * as React from "react"
 import * as RechartsPrimitive from "recharts"
 
@@ -54,7 +56,7 @@
 				data-chart={chartId}
 				className={cn(
 					"[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
-					className,
+          className
         )}
         {...props}
       >
@@ -69,7 +71,7 @@
 
 const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
 	const colorConfig = Object.entries(config).filter(
-		([, config]) => config.theme || config.color,
+    ([, config]) => config.theme || config.color
   )
 
   if (!colorConfig.length) {
@@ -92,7 +94,7 @@
 	})
 	.join("
")}
 }
-`,
+`
           )
           .join("
"),
       }}
@@ -172,7 +174,7 @@
 		<div
 			className={cn(
 				"border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
-				className,
+        className
       )}
     >
       {!nestLabel ? tooltipLabel : null}
@@ -187,7 +189,7 @@
 							key={item.dataKey}
 							className={cn(
 								"[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
-								indicator === "dot" && "items-center",
+                indicator === "dot" && "items-center"
               )}
             >
               {formatter && item?.value !== undefined && item.name ? (
@@ -207,7 +209,7 @@
 														"w-0 border-[1.5px] border-dashed bg-transparent":
 															indicator === "dashed",
 														"my-0.5": nestLabel && indicator === "dashed",
-													},
+                          }
                         )}
                         style={
                           {
@@ -221,7 +223,7 @@
 									<div
 										className={cn(
 											"flex flex-1 justify-between leading-none",
-											nestLabel ? "items-end" : "items-center",
+                      nestLabel ? "items-end" : "items-center"
                     )}
                   >
                     <div className="grid gap-1.5">
@@ -270,10 +272,10 @@
 			className={cn(
 				"flex items-center justify-center gap-4",
 				verticalAlign === "top" ? "pb-3" : "pt-3",
-				className,
+        className
 			)}
 		>
-			{payload.map(item => {
+      {payload.map((item) => {
         const key = `${nameKey || item.dataKey || "value"}`
         const itemConfig = getPayloadConfigFromPayload(config, item, key)
 
@@ -281,7 +283,7 @@
 					<div
 						key={item.value}
 						className={cn(
-							"[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3",
+              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
             )}
           >
             {itemConfig?.icon && !hideIcon ? (
@@ -306,7 +308,7 @@
 function getPayloadConfigFromPayload(
 	config: ChartConfig,
 	payload: unknown,
-	key: string,
+  key: string
 ) {
   if (typeof payload !== "object" || payload === null) {
     return undefined

\`\`\`
_Error generating diff._


## checkbox.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/checkbox.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/checkbox.tsx	2025-04-13 12:02:21
@@ -1,8 +1,8 @@
 "use client"
 
+import * as React from "react"
 import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
 import { CheckIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -15,7 +15,7 @@
 			data-slot="checkbox"
 			className={cn(
 				"peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## collapsible.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/collapsible.tsx	2025-03-19 02:35:23
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/collapsible.tsx	2025-04-13 12:02:21
@@ -1,3 +1,5 @@
+"use client"
+
 import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
 
 function Collapsible({

\`\`\`
_Error generating diff._


## command.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/command.tsx	2025-03-19 02:35:28
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/command.tsx	2025-04-13 12:02:21
@@ -1,17 +1,17 @@
 "use client"
 
+import * as React from "react"
 import { Command as CommandPrimitive } from "cmdk"
 import { SearchIcon } from "lucide-react"
-import * as React from "react"
 
+import { cn } from "@/lib/utils"
 import {
 	Dialog,
 	DialogContent,
 	DialogDescription,
 	DialogHeader,
 	DialogTitle,
-} from "@/components/ui/dialog"
-import { cn } from "@/lib/utils"
+} from "@/registry/new-york-v4/ui/dialog"
 
 function Command({
   className,
@@ -22,7 +22,7 @@
 			data-slot="command"
 			className={cn(
 				"bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
-				className,
+        className
       )}
       {...props}
     />
@@ -67,7 +67,7 @@
 				data-slot="command-input"
 				className={cn(
 					"placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
-					className,
+          className
         )}
         {...props}
       />
@@ -84,7 +84,7 @@
 			data-slot="command-list"
 			className={cn(
 				"max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
-				className,
+        className
       )}
       {...props}
     />
@@ -112,7 +112,7 @@
 			data-slot="command-group"
 			className={cn(
 				"text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
-				className,
+        className
       )}
       {...props}
     />
@@ -141,7 +141,7 @@
 			data-slot="command-item"
 			className={cn(
 				"data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     />
@@ -157,7 +157,7 @@
 			data-slot="command-shortcut"
 			className={cn(
 				"text-muted-foreground ml-auto text-xs tracking-widest",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## context-menu.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/context-menu.tsx	2025-03-19 02:35:31
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/context-menu.tsx	2025-04-13 12:02:21
@@ -1,8 +1,8 @@
 "use client"
 
+import * as React from "react"
 import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
 import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -67,7 +67,7 @@
 			data-inset={inset}
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     >
@@ -86,7 +86,7 @@
 			data-slot="context-menu-sub-content"
 			className={cn(
 				"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
-				className,
+        className
       )}
       {...props}
     />
@@ -103,7 +103,7 @@
 				data-slot="context-menu-content"
 				className={cn(
 					"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
-					className,
+          className
         )}
         {...props}
       />
@@ -127,7 +127,7 @@
 			data-variant={variant}
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     />
@@ -145,7 +145,7 @@
 			data-slot="context-menu-checkbox-item"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       checked={checked}
       {...props}
@@ -170,7 +170,7 @@
 			data-slot="context-menu-radio-item"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     >
@@ -197,7 +197,7 @@
 			data-inset={inset}
 			className={cn(
 				"text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
-				className,
+        className
       )}
       {...props}
     />
@@ -226,7 +226,7 @@
 			data-slot="context-menu-shortcut"
 			className={cn(
 				"text-muted-foreground ml-auto text-xs tracking-widest",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## dialog.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/dialog.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/dialog.tsx	2025-04-13 12:02:21
@@ -1,6 +1,8 @@
+"use client"
+
+import * as React from "react"
 import * as DialogPrimitive from "@radix-ui/react-dialog"
 import { XIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -37,7 +39,7 @@
 			data-slot="dialog-overlay"
 			className={cn(
 				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
-				className,
+        className
       )}
       {...props}
     />
@@ -56,7 +58,7 @@
 				data-slot="dialog-content"
 				className={cn(
 					"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
-					className,
+          className
         )}
         {...props}
       >
@@ -86,7 +88,7 @@
 			data-slot="dialog-footer"
 			className={cn(
 				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## drawer.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/drawer.tsx	2025-03-20 04:46:09
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/drawer.tsx	2025-04-13 12:02:21
@@ -1,3 +1,5 @@
+"use client"
+
 import * as React from "react"
 import { Drawer as DrawerPrimitive } from "vaul"
 
@@ -36,7 +38,7 @@
 			data-slot="drawer-overlay"
 			className={cn(
 				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
-				className,
+        className
       )}
       {...props}
     />
@@ -59,7 +61,7 @@
 					"data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
 					"data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
 					"data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
-					className,
+          className
         )}
         {...props}
       >

\`\`\`
_Error generating diff._


## dropdown-menu.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/dropdown-menu.tsx	2025-03-20 04:28:11
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/dropdown-menu.tsx	2025-04-13 12:02:21
@@ -1,8 +1,8 @@
 "use client"
 
+import * as React from "react"
 import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
 import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -43,7 +43,7 @@
 				sideOffset={sideOffset}
 				className={cn(
 					"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
-					className,
+          className
         )}
         {...props}
       />
@@ -75,7 +75,7 @@
 			data-variant={variant}
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     />
@@ -93,7 +93,7 @@
 			data-slot="dropdown-menu-checkbox-item"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       checked={checked}
       {...props}
@@ -129,7 +129,7 @@
 			data-slot="dropdown-menu-radio-item"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     >
@@ -156,7 +156,7 @@
 			data-inset={inset}
 			className={cn(
 				"px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
-				className,
+        className
       )}
       {...props}
     />
@@ -185,7 +185,7 @@
 			data-slot="dropdown-menu-shortcut"
 			className={cn(
 				"text-muted-foreground ml-auto text-xs tracking-widest",
-				className,
+        className
       )}
       {...props}
     />
@@ -212,7 +212,7 @@
 			data-inset={inset}
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
-				className,
+        className
       )}
       {...props}
     >
@@ -231,7 +231,7 @@
 			data-slot="dropdown-menu-sub-content"
 			className={cn(
 				"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## form.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/form.tsx	2025-03-20 04:57:53
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/form.tsx	2025-04-13 12:02:21
@@ -1,18 +1,20 @@
-import { Label } from "./label"
+"use client"
+
+import * as React from "react"
 import * as LabelPrimitive from "@radix-ui/react-label"
 import { Slot } from "@radix-ui/react-slot"
-import * as React from "react"
 import {
 	Controller,
-	type ControllerProps,
-	type FieldPath,
-	type FieldValues,
   FormProvider,
   useFormContext,
   useFormState,
+  type ControllerProps,
+  type FieldPath,
+  type FieldValues,
 } from "react-hook-form"
 
 import { cn } from "@/lib/utils"
+import { Label } from "@/registry/new-york-v4/ui/label"
 
 const Form = FormProvider
 
@@ -24,7 +26,7 @@
 }
 
 const FormFieldContext = React.createContext<FormFieldContextValue>(
-	{} as FormFieldContextValue,
+  {} as FormFieldContextValue
 )
 
 const FormField = <
@@ -68,7 +70,7 @@
 }
 
 const FormItemContext = React.createContext<FormItemContextValue>(
-	{} as FormItemContextValue,
+  {} as FormItemContextValue
 )
 
 function FormItem({ className, ...props }: React.ComponentProps<"div">) {

\`\`\`
_Error generating diff._


## hover-card.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/hover-card.tsx	2025-03-19 02:35:33
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/hover-card.tsx	2025-04-13 12:02:21
@@ -1,5 +1,7 @@
-import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
+"use client"
+
 import * as React from "react"
+import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
 
 import { cn } from "@/lib/utils"
 
@@ -31,7 +33,7 @@
 				sideOffset={sideOffset}
 				className={cn(
 					"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
-					className,
+          className
         )}
         {...props}
       />

\`\`\`
_Error generating diff._


## input-otp.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/input-otp.tsx	2025-03-22 16:24:07
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/input-otp.tsx	2025-04-13 12:02:21
@@ -1,8 +1,8 @@
 "use client"
 
+import * as React from "react"
 import { OTPInput, OTPInputContext } from "input-otp"
 import { MinusIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -18,7 +18,7 @@
 			data-slot="input-otp"
 			containerClassName={cn(
 				"flex items-center gap-2 has-disabled:opacity-50",
-				containerClassName,
+        containerClassName
       )}
       className={cn("disabled:cursor-not-allowed", className)}
       {...props}
@@ -52,7 +52,7 @@
 			data-active={isActive}
 			className={cn(
 				"data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## input.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/input.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/input.tsx	2025-04-13 12:02:21
@@ -11,7 +11,7 @@
 				"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
 				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
 				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## label.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/label.tsx	2025-03-19 02:35:36
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/label.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as LabelPrimitive from "@radix-ui/react-label"
 import * as React from "react"
+import * as LabelPrimitive from "@radix-ui/react-label"
 
 import { cn } from "@/lib/utils"
 
@@ -14,7 +14,7 @@
 			data-slot="label"
 			className={cn(
 				"flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## menubar.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/menubar.tsx	2025-03-19 02:35:36
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/menubar.tsx	2025-04-13 12:02:21
@@ -1,6 +1,8 @@
+"use client"
+
+import * as React from "react"
 import * as MenubarPrimitive from "@radix-ui/react-menubar"
 import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -13,7 +15,7 @@
 			data-slot="menubar"
 			className={cn(
 				"bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
-				className,
+        className
       )}
       {...props}
     />
@@ -55,7 +57,7 @@
 			data-slot="menubar-trigger"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
-				className,
+        className
       )}
       {...props}
     />
@@ -78,7 +80,7 @@
 				sideOffset={sideOffset}
 				className={cn(
 					"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
-					className,
+          className
         )}
         {...props}
       />
@@ -102,7 +104,7 @@
 			data-variant={variant}
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     />
@@ -120,7 +122,7 @@
 			data-slot="menubar-checkbox-item"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       checked={checked}
       {...props}
@@ -145,7 +147,7 @@
 			data-slot="menubar-radio-item"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     >
@@ -172,7 +174,7 @@
 			data-inset={inset}
 			className={cn(
 				"px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
-				className,
+        className
       )}
       {...props}
     />
@@ -201,7 +203,7 @@
 			data-slot="menubar-shortcut"
 			className={cn(
 				"text-muted-foreground ml-auto text-xs tracking-widest",
-				className,
+        className
       )}
       {...props}
     />
@@ -228,7 +230,7 @@
 			data-inset={inset}
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
-				className,
+        className
       )}
       {...props}
     >
@@ -247,7 +249,7 @@
 			data-slot="menubar-sub-content"
 			className={cn(
 				"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## navigation-menu.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/navigation-menu.tsx	2025-03-19 02:35:37
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/navigation-menu.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
+import * as React from "react"
 import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
 import { cva } from "class-variance-authority"
 import { ChevronDownIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -19,7 +19,7 @@
 			data-viewport={viewport}
 			className={cn(
 				"group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
-				className,
+        className
       )}
       {...props}
     >
@@ -38,7 +38,7 @@
 			data-slot="navigation-menu-list"
 			className={cn(
 				"group flex flex-1 list-none items-center justify-center gap-1",
-				className,
+        className
       )}
       {...props}
     />
@@ -59,7 +59,7 @@
 }
 
 const navigationMenuTriggerStyle = cva(
-	"group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
+  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
 )
 
 function NavigationMenuTrigger({
@@ -92,7 +92,7 @@
 			className={cn(
 				"data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
 				"group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
-				className,
+        className
       )}
       {...props}
     />
@@ -106,14 +106,14 @@
 	return (
 		<div
 			className={cn(
-				"absolute top-full left-0 isolate z-50 flex justify-center",
+        "absolute top-full left-0 isolate z-50 flex justify-center"
 			)}
 		>
 			<NavigationMenuPrimitive.Viewport
 				data-slot="navigation-menu-viewport"
 				className={cn(
 					"origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
-					className,
+          className
         )}
         {...props}
       />
@@ -129,8 +129,8 @@
 		<NavigationMenuPrimitive.Link
 			data-slot="navigation-menu-link"
 			className={cn(
-				"data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
+        className
       )}
       {...props}
     />
@@ -146,7 +146,7 @@
 			data-slot="navigation-menu-indicator"
 			className={cn(
 				"data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## pagination.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/pagination.tsx	2025-03-19 02:35:37
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/pagination.tsx	2025-04-13 12:02:21
@@ -1,12 +1,12 @@
+import * as React from "react"
 import {
 	ChevronLeftIcon,
 	ChevronRightIcon,
 	MoreHorizontalIcon,
 } from "lucide-react"
-import * as React from "react"
 
-import { Button, buttonVariants } from "@/components/ui/button"
 import { cn } from "@/lib/utils"
+import { Button, buttonVariants } from "@/registry/new-york-v4/ui/button"
 
 function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
   return (
@@ -58,7 +58,7 @@
 					variant: isActive ? "outline" : "ghost",
 					size,
 				}),
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## popover.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/popover.tsx	2025-03-20 04:44:50
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/popover.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as PopoverPrimitive from "@radix-ui/react-popover"
 import * as React from "react"
+import * as PopoverPrimitive from "@radix-ui/react-popover"
 
 import { cn } from "@/lib/utils"
 

\`\`\`
_Error generating diff._


## progress.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/progress.tsx	2025-03-19 02:35:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/progress.tsx	2025-04-13 12:02:21
@@ -1,5 +1,7 @@
-import * as ProgressPrimitive from "@radix-ui/react-progress"
+"use client"
+
 import * as React from "react"
+import * as ProgressPrimitive from "@radix-ui/react-progress"
 
 import { cn } from "@/lib/utils"
 
@@ -13,7 +15,7 @@
 			data-slot="progress"
 			className={cn(
 				"bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## radio-group.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/radio-group.tsx	2025-03-19 02:35:39
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/radio-group.tsx	2025-04-13 12:02:21
@@ -1,8 +1,8 @@
 "use client"
 
+import * as React from "react"
 import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
 import { CircleIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -28,7 +28,7 @@
 			data-slot="radio-group-item"
 			className={cn(
 				"border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## resizable.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/resizable.tsx	2025-03-19 02:35:39
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/resizable.tsx	2025-04-13 12:02:21
@@ -1,5 +1,7 @@
-import { GripVerticalIcon } from "lucide-react"
+"use client"
+
 import * as React from "react"
+import { GripVerticalIcon } from "lucide-react"
 import * as ResizablePrimitive from "react-resizable-panels"
 
 import { cn } from "@/lib/utils"
@@ -13,7 +15,7 @@
 			data-slot="resizable-panel-group"
 			className={cn(
 				"flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
-				className,
+        className
       )}
       {...props}
     />
@@ -38,7 +40,7 @@
 			data-slot="resizable-handle"
 			className={cn(
 				"bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## scroll-area.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/scroll-area.tsx	2025-03-19 02:35:41
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/scroll-area.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
 import * as React from "react"
+import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
 
 import { cn } from "@/lib/utils"
 
@@ -18,7 +18,7 @@
 		>
 			<ScrollAreaPrimitive.Viewport
 				data-slot="scroll-area-viewport"
-				className="ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
+        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
       >
         {children}
       </ScrollAreaPrimitive.Viewport>
@@ -43,7 +43,7 @@
 					"h-full w-2.5 border-l border-l-transparent",
 				orientation === "horizontal" &&
 					"h-2.5 flex-col border-t border-t-transparent",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## select.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/select.tsx	2025-04-12 01:36:38
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/select.tsx	2025-04-13 12:02:21
@@ -1,6 +1,8 @@
+"use client"
+
+import * as React from "react"
 import * as SelectPrimitive from "@radix-ui/react-select"
 import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -36,7 +38,7 @@
 			data-size={size}
 			className={cn(
 				"border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     >
@@ -62,7 +64,7 @@
 					"bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
 					position === "popper" &&
 						"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
-					className,
+          className
         )}
         position={position}
         {...props}
@@ -72,7 +74,7 @@
 					className={cn(
 						"p-1",
 						position === "popper" &&
-							"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
+              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
           )}
         >
           {children}
@@ -106,7 +108,7 @@
 			data-slot="select-item"
 			className={cn(
 				"focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
-				className,
+        className
       )}
       {...props}
     >
@@ -142,7 +144,7 @@
 			data-slot="select-scroll-up-button"
 			className={cn(
 				"flex cursor-default items-center justify-center py-1",
-				className,
+        className
       )}
       {...props}
     >
@@ -160,7 +162,7 @@
 			data-slot="select-scroll-down-button"
 			className={cn(
 				"flex cursor-default items-center justify-center py-1",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## separator.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/separator.tsx	2025-03-19 02:35:42
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/separator.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as SeparatorPrimitive from "@radix-ui/react-separator"
 import * as React from "react"
+import * as SeparatorPrimitive from "@radix-ui/react-separator"
 
 import { cn } from "@/lib/utils"
 
@@ -18,7 +18,7 @@
 			orientation={orientation}
 			className={cn(
 				"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## sheet.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/sheet.tsx	2025-03-19 02:35:43
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/sheet.tsx	2025-04-13 12:02:21
@@ -1,6 +1,8 @@
+"use client"
+
+import * as React from "react"
 import * as SheetPrimitive from "@radix-ui/react-dialog"
 import { XIcon } from "lucide-react"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -35,7 +37,7 @@
 			data-slot="sheet-overlay"
 			className={cn(
 				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
-				className,
+        className
       )}
       {...props}
     />
@@ -65,7 +67,7 @@
 						"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
 					side === "bottom" &&
 						"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
-					className,
+          className
         )}
         {...props}
       >

\`\`\`
_Error generating diff._


## sidebar.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/sidebar.tsx	2025-03-19 04:03:18
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/sidebar.tsx	2025-04-13 12:02:21
@@ -1,29 +1,29 @@
 "use client"
 
+import * as React from "react"
 import { Slot } from "@radix-ui/react-slot"
-import { cva, VariantProps } from "class-variance-authority"
+import { VariantProps, cva } from "class-variance-authority"
 import { PanelLeftIcon } from "lucide-react"
-import * as React from "react"
 
-import { Button } from "@/components/ui/button"
-import { Input } from "@/components/ui/input"
-import { Separator } from "@/components/ui/separator"
+import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile"
+import { cn } from "@/registry/new-york-v4/lib/utils"
+import { Button } from "@/registry/new-york-v4/ui/button"
+import { Input } from "@/registry/new-york-v4/ui/input"
+import { Separator } from "@/registry/new-york-v4/ui/separator"
 import {
 	Sheet,
 	SheetContent,
 	SheetDescription,
 	SheetHeader,
 	SheetTitle,
-} from "@/components/ui/sheet"
-import { Skeleton } from "@/components/ui/skeleton"
+} from "@/registry/new-york-v4/ui/sheet"
+import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
 import {
 	Tooltip,
 	TooltipContent,
 	TooltipProvider,
 	TooltipTrigger,
-} from "@/components/ui/tooltip"
-import { useIsMobile } from "@/hooks/use-mobile"
-import { cn } from "@/lib/utils"
+} from "@/registry/new-york-v4/ui/tooltip"
 
 const SIDEBAR_COOKIE_NAME = "sidebar_state"
 const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
@@ -85,12 +85,12 @@
 			// This sets the cookie to keep the sidebar state.
 			document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
 		},
-		[setOpenProp, open],
+    [setOpenProp, open]
 	)
 
 	// Helper to toggle the sidebar.
 	const toggleSidebar = React.useCallback(() => {
-		return isMobile ? setOpenMobile(open => !open) : setOpen(open => !open)
+    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
   }, [isMobile, setOpen, setOpenMobile])
 
   // Adds a keyboard shortcut to toggle the sidebar.
@@ -123,7 +123,7 @@
 			setOpenMobile,
 			toggleSidebar,
 		}),
-		[state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
+    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
   )
 
   return (
@@ -140,7 +140,7 @@
 					}
 					className={cn(
 						"group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
-						className,
+            className
           )}
           {...props}
         >
@@ -171,7 +171,7 @@
 				data-slot="sidebar"
 				className={cn(
 					"bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
-					className,
+          className
         )}
         {...props}
       >
@@ -223,7 +223,7 @@
 					"group-data-[side=right]:rotate-180",
 					variant === "floating" || variant === "inset"
 						? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
-						: "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
+            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
         )}
       />
       <div
@@ -237,7 +237,7 @@
 					variant === "floating" || variant === "inset"
 						? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
 						: "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
-					className,
+          className
         )}
         {...props}
       >
@@ -267,7 +267,7 @@
 			variant="ghost"
 			size="icon"
 			className={cn("size-7", className)}
-			onClick={event => {
+      onClick={(event) => {
         onClick?.(event)
         toggleSidebar()
       }}
@@ -297,7 +297,7 @@
 				"hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
 				"[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
 				"[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
-				className,
+        className
       )}
       {...props}
     />
@@ -311,7 +311,7 @@
 			className={cn(
 				"bg-background relative flex w-full flex-1 flex-col",
 				"md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
-				className,
+        className
       )}
       {...props}
     />
@@ -375,7 +375,7 @@
 			data-sidebar="content"
 			className={cn(
 				"flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
-				className,
+        className
       )}
       {...props}
     />
@@ -407,7 +407,7 @@
 			className={cn(
 				"text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
 				"group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
-				className,
+        className
       )}
       {...props}
     />
@@ -430,7 +430,7 @@
 				// Increases the hit area of the button on mobile.
 				"after:absolute after:-inset-2 md:after:hidden",
 				"group-data-[collapsible=icon]:hidden",
-				className,
+        className
       )}
       {...props}
     />
@@ -492,7 +492,7 @@
 			variant: "default",
 			size: "default",
 		},
-	},
+  }
 )
 
 function SidebarMenuButton({
@@ -570,7 +570,7 @@
 				"group-data-[collapsible=icon]:hidden",
 				showOnHover &&
 					"peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
-				className,
+        className
       )}
       {...props}
     />
@@ -592,7 +592,7 @@
 				"peer-data-[size=default]/menu-button:top-1.5",
 				"peer-data-[size=lg]/menu-button:top-2.5",
 				"group-data-[collapsible=icon]:hidden",
-				className,
+        className
       )}
       {...props}
     />
@@ -645,7 +645,7 @@
 			className={cn(
 				"border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
 				"group-data-[collapsible=icon]:hidden",
-				className,
+        className
       )}
       {...props}
     />
@@ -691,7 +691,7 @@
 				size === "sm" && "text-xs",
 				size === "md" && "text-sm",
 				"group-data-[collapsible=icon]:hidden",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## skeleton.tsx



## slider.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/slider.tsx	2025-03-19 02:35:44
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/slider.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as SliderPrimitive from "@radix-ui/react-slider"
 import * as React from "react"
+import * as SliderPrimitive from "@radix-ui/react-slider"
 
 import { cn } from "@/lib/utils"
 
@@ -20,7 +20,7 @@
 				: Array.isArray(defaultValue)
 				? defaultValue
 				: [min, max],
-		[value, defaultValue, min, max],
+    [value, defaultValue, min, max]
   )
 
   return (
@@ -32,20 +32,20 @@
 			max={max}
 			className={cn(
 				"relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
-				className,
+        className
 			)}
 			{...props}
 		>
 			<SliderPrimitive.Track
 				data-slot="slider-track"
 				className={cn(
-					"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
+          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
 				)}
 			>
 				<SliderPrimitive.Range
 					data-slot="slider-range"
 					className={cn(
-						"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
+            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
           )}
         />
       </SliderPrimitive.Track>

\`\`\`
_Error generating diff._


## sonner.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/sonner.tsx	2025-03-19 02:35:44
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/sonner.tsx	2025-04-13 12:02:21
@@ -1,3 +1,5 @@
+"use client"
+
 import { useTheme } from "next-themes"
 import { Toaster as Sonner, ToasterProps } from "sonner"
 

\`\`\`
_Error generating diff._


## switch.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/switch.tsx	2025-03-19 02:35:45
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/switch.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as SwitchPrimitive from "@radix-ui/react-switch"
 import * as React from "react"
+import * as SwitchPrimitive from "@radix-ui/react-switch"
 
 import { cn } from "@/lib/utils"
 
@@ -14,14 +14,14 @@
 			data-slot="switch"
 			className={cn(
 				"peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
-				className,
+        className
 			)}
 			{...props}
 		>
 			<SwitchPrimitive.Thumb
 				data-slot="switch-thumb"
 				className={cn(
-					"bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
+          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
         )}
       />
     </SwitchPrimitive.Root>

\`\`\`
_Error generating diff._


## table.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/table.tsx	2025-03-19 02:35:45
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/table.tsx	2025-04-13 12:02:21
@@ -1,3 +1,5 @@
+"use client"
+
 import * as React from "react"
 
 import { cn } from "@/lib/utils"
@@ -43,7 +45,7 @@
 			data-slot="table-footer"
 			className={cn(
 				"bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
-				className,
+        className
       )}
       {...props}
     />
@@ -56,7 +58,7 @@
 			data-slot="table-row"
 			className={cn(
 				"hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
-				className,
+        className
       )}
       {...props}
     />
@@ -69,7 +71,7 @@
 			data-slot="table-head"
 			className={cn(
 				"text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
-				className,
+        className
       )}
       {...props}
     />
@@ -82,7 +84,7 @@
 			data-slot="table-cell"
 			className={cn(
 				"p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## tabs.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/tabs.tsx	2025-03-19 02:35:46
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/tabs.tsx	2025-04-13 12:02:21
@@ -1,7 +1,7 @@
 "use client"
 
-import * as TabsPrimitive from "@radix-ui/react-tabs"
 import * as React from "react"
+import * as TabsPrimitive from "@radix-ui/react-tabs"
 
 import { cn } from "@/lib/utils"
 
@@ -27,7 +27,7 @@
 			data-slot="tabs-list"
 			className={cn(
 				"bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
-				className,
+        className
       )}
       {...props}
     />
@@ -43,7 +43,7 @@
 			data-slot="tabs-trigger"
 			className={cn(
 				"data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## textarea.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/textarea.tsx	2025-03-19 02:35:46
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/textarea.tsx	2025-04-13 12:02:21
@@ -8,7 +8,7 @@
 			data-slot="textarea"
 			className={cn(
 				"border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
-				className,
+        className
       )}
       {...props}
     />

\`\`\`
_Error generating diff._


## toggle-group.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/toggle-group.tsx	2025-03-19 02:35:47
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/toggle-group.tsx	2025-04-13 12:02:21
@@ -1,11 +1,11 @@
 "use client"
 
+import * as React from "react"
 import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
 import { type VariantProps } from "class-variance-authority"
-import * as React from "react"
 
-import { toggleVariants } from "@/components/ui/toggle"
 import { cn } from "@/lib/utils"
+import { toggleVariants } from "@/registry/new-york-v4/ui/toggle"
 
 const ToggleGroupContext = React.createContext<
   VariantProps<typeof toggleVariants>
@@ -29,7 +29,7 @@
 			data-size={size}
 			className={cn(
 				"group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
-				className,
+        className
       )}
       {...props}
     >
@@ -61,7 +61,7 @@
 					size: context.size || size,
 				}),
 				"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
-				className,
+        className
       )}
       {...props}
     >

\`\`\`
_Error generating diff._


## toggle.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/toggle.tsx	2025-03-19 02:35:48
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/toggle.tsx	2025-04-13 12:02:21
@@ -1,6 +1,8 @@
+"use client"
+
+import * as React from "react"
 import * as TogglePrimitive from "@radix-ui/react-toggle"
 import { cva, type VariantProps } from "class-variance-authority"
-import * as React from "react"
 
 import { cn } from "@/lib/utils"
 
@@ -23,7 +25,7 @@
 			variant: "default",
 			size: "default",
 		},
-	},
+  }
 )
 
 function Toggle({

\`\`\`
_Error generating diff._


## tooltip.tsx

\`\`\`diff
--- /Users/wustep/Documents/Projects/shadbook/src/components/ui/tooltip.tsx	2025-04-07 03:09:36
+++ /Users/wustep/Documents/Projects/shadbook/temp/apps/v4/registry/new-york-v4/ui/tooltip.tsx	2025-04-13 12:02:21
@@ -1,5 +1,7 @@
-import * as TooltipPrimitive from "@radix-ui/react-tooltip"
+"use client"
+
 import * as React from "react"
+import * as TooltipPrimitive from "@radix-ui/react-tooltip"
 
 import { cn } from "@/lib/utils"
 
@@ -45,7 +47,7 @@
 				sideOffset={sideOffset}
 				className={cn(
 					"bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
-					className,
+          className
         )}
         {...props}
       >

\`\`\`
_Error generating diff._
