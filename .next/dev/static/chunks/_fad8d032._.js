(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:ebcc79 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40748c70fcbd49f623e6a986a1ccba55357008ce26":"createCheckoutSession"},"app/actions/stripe.ts",""] */ __turbopack_context__.s([
    "createCheckoutSession",
    ()=>createCheckoutSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createCheckoutSession = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40748c70fcbd49f623e6a986a1ccba55357008ce26", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCheckoutSession"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3RyaXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IHN0cmlwZSwgUExBTlMsIHR5cGUgUGxhbklkIH0gZnJvbSBcIkAvbGliL3N0cmlwZVwiXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2Uvc2VydmVyXCJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDaGVja291dFNlc3Npb24ocGxhbklkOiBQbGFuSWQpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5pY2h0IGF1dG9yaXNpZXJ0XCIpXG4gIH1cblxuICBjb25zdCBwbGFuID0gUExBTlNbcGxhbklkXVxuICBpZiAoIXBsYW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmfDvGx0aWdlciBQbGFuXCIpXG4gIH1cblxuICAvLyBDaGVjayBmb3IgZXhpc3RpbmcgU3RyaXBlIGN1c3RvbWVyXG4gIGNvbnN0IHsgZGF0YTogc3Vic2NyaXB0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwic3Vic2NyaXB0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJzdHJpcGVfY3VzdG9tZXJfaWRcIilcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpXG5cbiAgbGV0IGN1c3RvbWVySWQgPSBzdWJzY3JpcHRpb24/LnN0cmlwZV9jdXN0b21lcl9pZFxuXG4gIC8vIENyZWF0ZSBTdHJpcGUgY3VzdG9tZXIgaWYgbm90IGV4aXN0c1xuICBpZiAoIWN1c3RvbWVySWQpIHtcbiAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgc3VwYWJhc2VfdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjdXN0b21lcklkID0gY3VzdG9tZXIuaWRcbiAgfVxuXG4gIC8vIENyZWF0ZSBjaGVja291dCBzZXNzaW9uIHdpdGggc3Vic2NyaXB0aW9uIG1vZGVcbiAgY29uc3QgYmFzZVVybCA9XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTCB8fCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERVZfU1VQQUJBU0VfUkVESVJFQ1RfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgY3VzdG9tZXI6IGN1c3RvbWVySWQsXG4gICAgbW9kZTogXCJzdWJzY3JpcHRpb25cIixcbiAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICBsaW5lX2l0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHByaWNlX2RhdGE6IHtcbiAgICAgICAgICBjdXJyZW5jeTogXCJldXJcIixcbiAgICAgICAgICBwcm9kdWN0X2RhdGE6IHtcbiAgICAgICAgICAgIG5hbWU6IGBQcm9tcHRDYWwgJHtwbGFuLm5hbWV9YCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwbGFuLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdW5pdF9hbW91bnQ6IHBsYW4ucHJpY2UsXG4gICAgICAgICAgcmVjdXJyaW5nOiB7XG4gICAgICAgICAgICBpbnRlcnZhbDogcGxhbi5pbnRlcnZhbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzdWJzY3JpcHRpb25fZGF0YToge1xuICAgICAgdHJpYWxfcGVyaW9kX2RheXM6IDE0LFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgc3VwYWJhc2VfdXNlcl9pZDogdXNlci5pZCxcbiAgICAgICAgcGxhbl9pZDogcGxhbklkLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN1Y2Nlc3NfdXJsOiBgJHtiYXNlVXJsfS9hcHA/Y2hlY2tvdXQ9c3VjY2Vzc2AsXG4gICAgY2FuY2VsX3VybDogYCR7YmFzZVVybH0vcHJpY2luZz9jaGVja291dD1jYW5jZWxsZWRgLFxuICAgIG1ldGFkYXRhOiB7XG4gICAgICBzdXBhYmFzZV91c2VyX2lkOiB1c2VyLmlkLFxuICAgICAgcGxhbl9pZDogcGxhbklkLFxuICAgIH0sXG4gIH0pXG5cbiAgaWYgKHNlc3Npb24udXJsKSB7XG4gICAgcmVkaXJlY3Qoc2Vzc2lvbi51cmwpXG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJDaGVja291dCBTZXNzaW9uIGtvbm50ZSBuaWNodCBlcnN0ZWxsdCB3ZXJkZW5cIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbWVyUG9ydGFsU2Vzc2lvbigpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5pY2h0IGF1dG9yaXNpZXJ0XCIpXG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHN1YnNjcmlwdGlvbiB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbShcInN1YnNjcmlwdGlvbnNcIilcbiAgICAuc2VsZWN0KFwic3RyaXBlX2N1c3RvbWVyX2lkXCIpXG4gICAgLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKVxuICAgIC5zaW5nbGUoKVxuXG4gIGlmICghc3Vic2NyaXB0aW9uPy5zdHJpcGVfY3VzdG9tZXJfaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJLZWluIEFib25uZW1lbnQgZ2VmdW5kZW5cIilcbiAgfVxuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuYmlsbGluZ1BvcnRhbC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgIGN1c3RvbWVyOiBzdWJzY3JpcHRpb24uc3RyaXBlX2N1c3RvbWVyX2lkLFxuICAgIHJldHVybl91cmw6IGAke1xuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTCB8fCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ERVZfU1VQQUJBU0VfUkVESVJFQ1RfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbiAgICB9L2FwcC9zZXR0aW5nc2AsXG4gIH0pXG5cbiAgcmVkaXJlY3Qoc2Vzc2lvbi51cmwpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25TdGF0dXMoKSB7XG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyB1c2VyIH0sXG4gIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBzdWJzY3JpcHRpb24gfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJzdWJzY3JpcHRpb25zXCIpLnNlbGVjdChcIipcIikuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpLnNpbmdsZSgpXG5cbiAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICByZXR1cm4geyBzdGF0dXM6IFwibm9uZVwiLCBpc0FjdGl2ZTogZmFsc2UgfVxuICB9XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICBjb25zdCBpc1RyaWFsaW5nID1cbiAgICBzdWJzY3JpcHRpb24uc3RhdHVzID09PSBcInRyaWFsaW5nXCIgfHwgKHN1YnNjcmlwdGlvbi50cmlhbF9lbmQgJiYgbmV3IERhdGUoc3Vic2NyaXB0aW9uLnRyaWFsX2VuZCkgPiBub3cpXG4gIGNvbnN0IGlzQWN0aXZlID0gc3Vic2NyaXB0aW9uLnN0YXR1cyA9PT0gXCJhY3RpdmVcIiB8fCBpc1RyaWFsaW5nXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IHN1YnNjcmlwdGlvbi5zdGF0dXMsXG4gICAgaXNBY3RpdmUsXG4gICAgaXNUcmlhbGluZyxcbiAgICB0cmlhbEVuZDogc3Vic2NyaXB0aW9uLnRyaWFsX2VuZCxcbiAgICBjdXJyZW50UGVyaW9kRW5kOiBzdWJzY3JpcHRpb24uY3VycmVudF9wZXJpb2RfZW5kLFxuICAgIHBsYW5JZDogc3Vic2NyaXB0aW9uLnBsYW5faWQsXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBTXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/checkout-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckoutButton",
    ()=>CheckoutButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ebcc79__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:ebcc79 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CheckoutButton({ planId, children, ...props }) {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClick = async ()=>{
        setIsLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ebcc79__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCheckoutSession"])(planId);
        } catch (error) {
            console.error("Checkout error:", error);
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: handleClick,
        disabled: isLoading,
        ...props,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "mr-2 h-4 w-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/checkout-button.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this),
                "Wird geladen..."
            ]
        }, void 0, true) : children
    }, void 0, false, {
        fileName: "[project]/components/checkout-button.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(CheckoutButton, "EmvgwIb3cHpoFpeP+WmEDbjx4y4=");
_c = CheckoutButton;
var _c;
__turbopack_context__.k.register(_c, "CheckoutButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_fad8d032._.js.map