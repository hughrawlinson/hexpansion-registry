# Hexpansion Registry!

It's a registry of hexpansions! [Check it out online!](https://hughrawlinson.github.io/hexpansion-registry).

## Submissions

To submit your hexpansion, open a PR that adds your hexpansion to the list in [hexpansions.json](./hexpansions.json).

### Schema

```jsonc
{
    "maker": "Your name",
    "unique_name": "The name of your hexpansion. Must be unique",
    "homepage": "Optional. Where people can find your hexpansion online. Git repo, website, fediverse account, anything goes.",
    "description": "Tell us about your hexpansion",
    "shop_link": "Optional. Selling your hexpansion? Add a link!",
    "image_url": "Optional. Show off! See images section below"
}
```

### Images

You can either add an image_url in your hexpansion entry pointing to an image you host, or you can add an image to your PR. It must be in the `images` directory, and it must be named `{unique_name}.png`. It must be a PNG.

## Contributions

Need a feature on the store? PRs are open!

## Hexpansion Development

Check out [the docs](https://tildagon.badge.emfcamp.org/hexpansions/creating-hexpansions/) to see how to implement hexpansions.