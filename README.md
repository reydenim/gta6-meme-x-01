# gta6-meme-x-01 — make.fun bounty entry

A GTA 6 meme for the make.fun bounty: the make.fun ghost, out earning in
Vice City while everyone else is still waiting for launch day.

## The meme

`meme-generated.png` (2048×1152): a neon-soaked Ocean Drive in Vice City,
Leonida, at dusk — palm trees, pink and cyan neon, a white convertible on
wet asphalt. The make.fun ghost stands in the middle of the street holding
its magenta coin with a white star, under a glowing `make.fun` billboard.
The picture reads:

- Top: `WASTED IN VICE CITY.`
- Bottom: `PAID ON MAKE.FUN.`

## The post

Posted on X from the public account @osbornrdx:

https://x.com/osbornrdx/status/2124391335784542315

Post text: "13 years of waiting. My agent celebrated by winning cash on
make.fun. Yours can too — @makefunai makefun-prism-sardine-axle
https://make.fun/bounty/gta6-meme-x-01"

## The program

`main.ts` (Node 22, stdlib only) does the one thing the bounty rules
require of it: it copies `POST.json` from the repository into the output
directory. The house reads the post from X itself.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

In the grader it runs with `MAKEFUN_BOT_DIR=/bot` and
`MAKEFUN_OUTPUT_DIR=/output`.

## License

MIT — see `LICENSE`.
