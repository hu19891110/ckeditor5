---
# Scope:
# * Introduction to the migration problem.
# * Underline that migrating is a complex and important task.
# * List and clarify the things that need attention when migrating.

title: Migration from previous versions
category-id: builds-guides
---

When compared to its previous versions, CKEditor 5 can be considered a totally new editor. Every single aspect of it has been redesigned, from installation, to integration, to features, to its data model, to its API. Therefore, moving applications using previous version to version 5 cannot be called simply “upgrade”. It is something bigger, so the “migration” term fits better.

There is no “drop in” solution for migrating. In this guide we hope to summarize the most important aspects to be taken in consideration.

Before starting, be sure that migrating is your best choice. Check {@link TODO When NOT to use CKEditor 5 Builds}?

## Installation and integration

The very first aspect that changed with CKEditor 5 is its installation procedure. It became much more modern, with introduction of modular patterns, UMD, npm, etc. Check {@link TODO Installation} for more details.

Once installed, the API for integrating CKEditor in your pages also changed. It's worth checking Basic API for an introduction.

## Features

When it comes to features, there are two aspects to be taken in consideration:

* CKEditor 5 may still not have the same features available in CKEditor 4.
* Existing features may behave differently.

Therefore, it is worth spending good time analysing required features.

CKEditor 5 has been designed with focus on creating quality content. Therefore, there are good reasons for it to not support some old features. You should take this chance to rethink features in your application, many times having to switch the approach towards a more modern reasoning.

<!-- TODO 4 -->

## Plugins

The trickiest migration challenge to be faced may be related to custom plugins you could have had developed for CKEditor 4. Although their concept may stay the same, their implementation is certainly different and will require rewriting them from scratch.

The same may apply for third party plugins, which may not have been yet ported to CKEditor 5.

Check the {@link TODO Plugins guide} for more information on the development of plugins.

## Themes (skins)

In CKEditor 5, the previous concept of "skins” has been reviewed and is now called “themes”.

If you have custom skins for CKEditor 4, these skins need to be recreated for CKEditor 5. Fortunately custom theming in CKEditor 5 is much more powerful and simpler than before. For more information, check how to {@link TODO create new themes in the CKEditor 5 Framework documentation}.

## Existing data

An extremely important aspect to be remembered is that, because of the difference on features, data produced with CKEditor 4 may not be compatible with CKEditor 5.

Extensive analysis, data verification and tests should be performed on existing data. If necessary, conversion procedures should be developed to avoid data loss.