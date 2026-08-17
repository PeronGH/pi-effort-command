import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const LEVELS = [
	"off",
	"minimal",
	"low",
	"medium",
	"high",
	"xhigh",
	"max",
] as const;

export default function (pi: ExtensionAPI) {
	pi.registerCommand("effort", {
		description: "Set reasoning effort (thinking level)",
		getArgumentCompletions: (prefix) => {
			const items = LEVELS.filter((level) => level.startsWith(prefix)).map(
				(level) => ({
					label: level,
					value: level,
				}),
			);
			return items.length > 0 ? items : null;
		},
		handler: async (args, ctx) => {
			const requested = args.trim();
			if (!requested) {
				ctx.ui.notify(`Current effort: ${pi.getThinkingLevel()}`, "info");
				return;
			}
			if (!(LEVELS as readonly string[]).includes(requested)) {
				ctx.ui.notify(
					`Unknown level "${requested}". Use one of: ${LEVELS.join(", ")}`,
					"error",
				);
				return;
			}
			pi.setThinkingLevel(requested as (typeof LEVELS)[number]);
			const effective = pi.getThinkingLevel();
			if (effective !== requested) {
				ctx.ui.notify(
					`${requested} not supported by the current model — clamped to ${effective}`,
					"warning",
				);
				return;
			}
			ctx.ui.notify(`Effort set to ${effective}`, "info");
		},
	});
}
