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
"[project]/app/actions/data:8e35bc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40748c70fcbd49f623e6a986a1ccba55357008ce26":"createCheckoutSession"},"app/actions/stripe.ts",""] */ __turbopack_context__.s([
    "createCheckoutSession",
    ()=>createCheckoutSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createCheckoutSession = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40748c70fcbd49f623e6a986a1ccba55357008ce26", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCheckoutSession"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3RyaXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IHN0cmlwZSwgUExBTlMsIHR5cGUgUGxhbklkIH0gZnJvbSBcIkAvbGliL3N0cmlwZVwiXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2Uvc2VydmVyXCJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDaGVja291dFNlc3Npb24ocGxhbklkOiBQbGFuSWQpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5pY2h0IGF1dG9yaXNpZXJ0XCIpXG4gIH1cblxuICBjb25zdCBwbGFuID0gUExBTlNbcGxhbklkXVxuICBpZiAoIXBsYW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmfDvGx0aWdlciBQbGFuXCIpXG4gIH1cblxuICAvLyBDaGVjayBmb3IgZXhpc3RpbmcgU3RyaXBlIGN1c3RvbWVyXG4gIGNvbnN0IHsgZGF0YTogc3Vic2NyaXB0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwic3Vic2NyaXB0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJzdHJpcGVfY3VzdG9tZXJfaWRcIilcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpXG5cbiAgbGV0IGN1c3RvbWVySWQgPSBzdWJzY3JpcHRpb24/LnN0cmlwZV9jdXN0b21lcl9pZFxuXG4gIC8vIENyZWF0ZSBTdHJpcGUgY3VzdG9tZXIgaWYgbm90IGV4aXN0c1xuICBpZiAoIWN1c3RvbWVySWQpIHtcbiAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgc3VwYWJhc2VfdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjdXN0b21lcklkID0gY3VzdG9tZXIuaWRcbiAgfVxuXG4gIC8vIENyZWF0ZSBjaGVja291dCBzZXNzaW9uIHdpdGggc3Vic2NyaXB0aW9uIG1vZGVcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLFxuICAgIG1vZGU6IFwic3Vic2NyaXB0aW9uXCIsXG4gICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXG4gICAgbGluZV9pdGVtczogW1xuICAgICAge1xuICAgICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgICAgY3VycmVuY3k6IFwiZXVyXCIsXG4gICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBgUHJvbXB0Q2FsICR7cGxhbi5uYW1lfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcGxhbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVuaXRfYW1vdW50OiBwbGFuLnByaWNlLFxuICAgICAgICAgIHJlY3VycmluZzoge1xuICAgICAgICAgICAgaW50ZXJ2YWw6IHBsYW4uaW50ZXJ2YWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3Vic2NyaXB0aW9uX2RhdGE6IHtcbiAgICAgIHRyaWFsX3BlcmlvZF9kYXlzOiAzMCxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHN1cGFiYXNlX3VzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgIHBsYW5faWQ6IHBsYW5JZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVWX1NVUEFCQVNFX1JFRElSRUNUX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwifS9hcHA/Y2hlY2tvdXQ9c3VjY2Vzc2AsXG4gICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVWX1NVUEFCQVNFX1JFRElSRUNUX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwifS9wcmljaW5nP2NoZWNrb3V0PWNhbmNlbGxlZGAsXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIHN1cGFiYXNlX3VzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBwbGFuX2lkOiBwbGFuSWQsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoc2Vzc2lvbi51cmwpIHtcbiAgICByZWRpcmVjdChzZXNzaW9uLnVybClcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkNoZWNrb3V0IFNlc3Npb24ga29ubnRlIG5pY2h0IGVyc3RlbGx0IHdlcmRlblwiKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tZXJQb3J0YWxTZXNzaW9uKCkge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcbiAgaWYgKCF1c2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTmljaHQgYXV0b3Jpc2llcnRcIilcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogc3Vic2NyaXB0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwic3Vic2NyaXB0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJzdHJpcGVfY3VzdG9tZXJfaWRcIilcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKCFzdWJzY3JpcHRpb24/LnN0cmlwZV9jdXN0b21lcl9pZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIktlaW4gQWJvbm5lbWVudCBnZWZ1bmRlblwiKVxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5iaWxsaW5nUG9ydGFsLnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgY3VzdG9tZXI6IHN1YnNjcmlwdGlvbi5zdHJpcGVfY3VzdG9tZXJfaWQsXG4gICAgcmV0dXJuX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVWX1NVUEFCQVNFX1JFRElSRUNUX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwifS9hcHAvc2V0dGluZ3NgLFxuICB9KVxuXG4gIHJlZGlyZWN0KHNlc3Npb24udXJsKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9uU3RhdHVzKCkge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogc3Vic2NyaXB0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic3Vic2NyaXB0aW9uc1wiKS5zZWxlY3QoXCIqXCIpLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKS5zaW5nbGUoKVxuXG4gIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3RhdHVzOiBcIm5vbmVcIiwgaXNBY3RpdmU6IGZhbHNlIH1cbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgY29uc3QgaXNUcmlhbGluZyA9XG4gICAgc3Vic2NyaXB0aW9uLnN0YXR1cyA9PT0gXCJ0cmlhbGluZ1wiIHx8IChzdWJzY3JpcHRpb24udHJpYWxfZW5kICYmIG5ldyBEYXRlKHN1YnNjcmlwdGlvbi50cmlhbF9lbmQpID4gbm93KVxuICBjb25zdCBpc0FjdGl2ZSA9IHN1YnNjcmlwdGlvbi5zdGF0dXMgPT09IFwiYWN0aXZlXCIgfHwgaXNUcmlhbGluZ1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiBzdWJzY3JpcHRpb24uc3RhdHVzLFxuICAgIGlzQWN0aXZlLFxuICAgIGlzVHJpYWxpbmcsXG4gICAgdHJpYWxFbmQ6IHN1YnNjcmlwdGlvbi50cmlhbF9lbmQsXG4gICAgY3VycmVudFBlcmlvZEVuZDogc3Vic2NyaXB0aW9uLmN1cnJlbnRfcGVyaW9kX2VuZCxcbiAgICBwbGFuSWQ6IHN1YnNjcmlwdGlvbi5wbGFuX2lkLFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQU1zQiJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$8e35bc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:8e35bc [app-client] (ecmascript) <text/javascript>");
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$8e35bc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCheckoutSession"])(planId);
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

//# sourceMappingURL=_ded46c48._.js.map