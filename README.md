# pi-effort-command

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
pi install ./path/to/pi-effort-command
```

Or try it once:

```bash
pi -e ./src/index.ts
```