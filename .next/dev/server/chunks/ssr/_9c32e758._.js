module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/app/actions/data:1f3318 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00677f1362671c8c63d650dcc4342d0621fdd7e736":"createCustomerPortalSession"},"app/actions/stripe.ts",""] */ __turbopack_context__.s([
    "createCustomerPortalSession",
    ()=>createCustomerPortalSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createCustomerPortalSession = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00677f1362671c8c63d650dcc4342d0621fdd7e736", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCustomerPortalSession"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3RyaXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXG5cbmltcG9ydCB7IHN0cmlwZSwgUExBTlMsIHR5cGUgUGxhbklkIH0gZnJvbSBcIkAvbGliL3N0cmlwZVwiXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2Uvc2VydmVyXCJcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDaGVja291dFNlc3Npb24ocGxhbklkOiBQbGFuSWQpIHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKVxuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHVzZXIgfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpXG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5pY2h0IGF1dG9yaXNpZXJ0XCIpXG4gIH1cblxuICBjb25zdCBwbGFuID0gUExBTlNbcGxhbklkXVxuICBpZiAoIXBsYW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmfDvGx0aWdlciBQbGFuXCIpXG4gIH1cblxuICAvLyBDaGVjayBmb3IgZXhpc3RpbmcgU3RyaXBlIGN1c3RvbWVyXG4gIGNvbnN0IHsgZGF0YTogc3Vic2NyaXB0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwic3Vic2NyaXB0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJzdHJpcGVfY3VzdG9tZXJfaWRcIilcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpXG5cbiAgbGV0IGN1c3RvbWVySWQgPSBzdWJzY3JpcHRpb24/LnN0cmlwZV9jdXN0b21lcl9pZFxuXG4gIC8vIENyZWF0ZSBTdHJpcGUgY3VzdG9tZXIgaWYgbm90IGV4aXN0c1xuICBpZiAoIWN1c3RvbWVySWQpIHtcbiAgICBjb25zdCBjdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgc3VwYWJhc2VfdXNlcl9pZDogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjdXN0b21lcklkID0gY3VzdG9tZXIuaWRcbiAgfVxuXG4gIC8vIENyZWF0ZSBjaGVja291dCBzZXNzaW9uIHdpdGggc3Vic2NyaXB0aW9uIG1vZGVcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLFxuICAgIG1vZGU6IFwic3Vic2NyaXB0aW9uXCIsXG4gICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXG4gICAgbGluZV9pdGVtczogW1xuICAgICAge1xuICAgICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgICAgY3VycmVuY3k6IFwiZXVyXCIsXG4gICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICBuYW1lOiBgUHJvbXB0Q2FsICR7cGxhbi5uYW1lfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcGxhbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVuaXRfYW1vdW50OiBwbGFuLnByaWNlLFxuICAgICAgICAgIHJlY3VycmluZzoge1xuICAgICAgICAgICAgaW50ZXJ2YWw6IHBsYW4uaW50ZXJ2YWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3Vic2NyaXB0aW9uX2RhdGE6IHtcbiAgICAgIHRyaWFsX3BlcmlvZF9kYXlzOiAzMCxcbiAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgIHN1cGFiYXNlX3VzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICAgIHBsYW5faWQ6IHBsYW5JZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVWX1NVUEFCQVNFX1JFRElSRUNUX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwifS9hcHA/Y2hlY2tvdXQ9c3VjY2Vzc2AsXG4gICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVWX1NVUEFCQVNFX1JFRElSRUNUX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwifS9wcmljaW5nP2NoZWNrb3V0PWNhbmNlbGxlZGAsXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIHN1cGFiYXNlX3VzZXJfaWQ6IHVzZXIuaWQsXG4gICAgICBwbGFuX2lkOiBwbGFuSWQsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoc2Vzc2lvbi51cmwpIHtcbiAgICByZWRpcmVjdChzZXNzaW9uLnVybClcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihcIkNoZWNrb3V0IFNlc3Npb24ga29ubnRlIG5pY2h0IGVyc3RlbGx0IHdlcmRlblwiKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ3VzdG9tZXJQb3J0YWxTZXNzaW9uKCkge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcbiAgaWYgKCF1c2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTmljaHQgYXV0b3Jpc2llcnRcIilcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogc3Vic2NyaXB0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwic3Vic2NyaXB0aW9uc1wiKVxuICAgIC5zZWxlY3QoXCJzdHJpcGVfY3VzdG9tZXJfaWRcIilcbiAgICAuZXEoXCJ1c2VyX2lkXCIsIHVzZXIuaWQpXG4gICAgLnNpbmdsZSgpXG5cbiAgaWYgKCFzdWJzY3JpcHRpb24/LnN0cmlwZV9jdXN0b21lcl9pZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIktlaW4gQWJvbm5lbWVudCBnZWZ1bmRlblwiKVxuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5iaWxsaW5nUG9ydGFsLnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgY3VzdG9tZXI6IHN1YnNjcmlwdGlvbi5zdHJpcGVfY3VzdG9tZXJfaWQsXG4gICAgcmV0dXJuX3VybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVWX1NVUEFCQVNFX1JFRElSRUNUX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwifS9hcHAvc2V0dGluZ3NgLFxuICB9KVxuXG4gIHJlZGlyZWN0KHNlc3Npb24udXJsKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9uU3RhdHVzKCkge1xuICBjb25zdCBzdXBhYmFzZSA9IGF3YWl0IGNyZWF0ZUNsaWVudCgpXG5cbiAgY29uc3Qge1xuICAgIGRhdGE6IHsgdXNlciB9LFxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKClcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YTogc3Vic2NyaXB0aW9uIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwic3Vic2NyaXB0aW9uc1wiKS5zZWxlY3QoXCIqXCIpLmVxKFwidXNlcl9pZFwiLCB1c2VyLmlkKS5zaW5nbGUoKVxuXG4gIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHsgc3RhdHVzOiBcIm5vbmVcIiwgaXNBY3RpdmU6IGZhbHNlIH1cbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgY29uc3QgaXNUcmlhbGluZyA9XG4gICAgc3Vic2NyaXB0aW9uLnN0YXR1cyA9PT0gXCJ0cmlhbGluZ1wiIHx8IChzdWJzY3JpcHRpb24udHJpYWxfZW5kICYmIG5ldyBEYXRlKHN1YnNjcmlwdGlvbi50cmlhbF9lbmQpID4gbm93KVxuICBjb25zdCBpc0FjdGl2ZSA9IHN1YnNjcmlwdGlvbi5zdGF0dXMgPT09IFwiYWN0aXZlXCIgfHwgaXNUcmlhbGluZ1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiBzdWJzY3JpcHRpb24uc3RhdHVzLFxuICAgIGlzQWN0aXZlLFxuICAgIGlzVHJpYWxpbmcsXG4gICAgdHJpYWxFbmQ6IHN1YnNjcmlwdGlvbi50cmlhbF9lbmQsXG4gICAgY3VycmVudFBlcmlvZEVuZDogc3Vic2NyaXB0aW9uLmN1cnJlbnRfcGVyaW9kX2VuZCxcbiAgICBwbGFuSWQ6IHN1YnNjcmlwdGlvbi5wbGFuX2lkLFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQW9Gc0IifQ==
}),
"[project]/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
let supabaseClient = null;
function createClient() {
    if (supabaseClient) {
        return supabaseClient;
    }
    // Check if we already have a client stored on window (survives HMR)
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    supabaseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://uqsaqwbftaailekscljz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxc2Fxd2JmdGFhaWxla3NjbGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjA0NjYsImV4cCI6MjA3OTU5NjQ2Nn0.5NFSBufB0efZOS7hDC6bFrrllqT0AXMF9jejWtVq7pk"), {
        isSingleton: true
    });
    // Store on window for HMR persistence
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return supabaseClient;
}
}),
"[project]/components/settings-actions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsActions",
    ()=>SettingsActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$1f3318__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:1f3318 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function SettingsActions({ hasSubscription }) {
    const [isPortalLoading, setIsPortalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLogoutLoading, setIsLogoutLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const handleManageSubscription = async ()=>{
        setIsPortalLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$1f3318__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCustomerPortalSession"])();
        } catch (error) {
            console.error("Portal error:", error);
            setIsPortalLoading(false);
        }
    };
    const handleLogout = async ()=>{
        setIsLogoutLoading(true);
        await supabase.auth.signOut();
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-3 pt-4",
        children: [
            hasSubscription ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleManageSubscription,
                disabled: isPortalLoading,
                variant: "outline",
                children: isPortalLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "mr-2 h-4 w-4 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/settings-actions.tsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this),
                        "Wird geladen..."
                    ]
                }, void 0, true) : "Abonnement verwalten"
            }, void 0, false, {
                fileName: "[project]/components/settings-actions.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/pricing",
                    children: "Plan wählen"
                }, void 0, false, {
                    fileName: "[project]/components/settings-actions.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/settings-actions.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleLogout,
                disabled: isLogoutLoading,
                variant: "ghost",
                children: isLogoutLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "mr-2 h-4 w-4 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/settings-actions.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        "Abmelden..."
                    ]
                }, void 0, true) : "Abmelden"
            }, void 0, false, {
                fileName: "[project]/components/settings-actions.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings-actions.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_9c32e758._.js.map