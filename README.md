# pi-effort-command

> [!WARNING]
> **Archived.** pi now has a built-in `/thinking <level>` command, so this extension is no longer needed.

pi extension that adds the `/effort` command to set the model's reasoning effort (thinking level).

## Usage

```
/effort             # show current effort
/effort high        # set effort to high
/effort xhigh       # if unsupported, pi clamps and reports the effective level
```

Levels: `off`, `minimal`, `low`, `medium`, `high`, `xhigh`, `max` (Tab-completes).

The level is clamped to model capabilities by pi itself (non-reasoning models always use `off`); `/effort` reports the effective level when clamping happens.

## Install

```bash
pi install npm:pi-effort-command
```

Or try it once:

```bash
pi -e npm:pi-effort-command
```