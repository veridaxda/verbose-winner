# Veridax website

## Upload the files to GitHub

1. Extract the ZIP and open the `Veridax_GitHub` folder.
2. On the main page of the target repository, select **Add file → Upload files**.
   Choose all the files inside `Veridax_GitHub` at once. You should see
   `index.html`, `site.css` and the image files alongside each other.
3. Commit the upload to the branch your hosting provider will use, typically
   `main`. If that branch requires a pull request, merge the upload before
   connecting the host.

## Connect the hosting provider

- Repository: select the repository containing these files.
- Branch: select the branch containing the upload.
- Publish directory: the repository root (`.` if a path is required).
- Build command: leave blank. Choose static HTML or no framework if prompted.
- Homepage: `index.html`. If supported, set `404.html` as the error document.

The site is configured for https://veridax.eu/. The contact links use
`info@veridax.eu`. The repository includes all website pages, vector artwork,
photos and fonts. Keep the file names and their shared location when editing
or deploying.

To review the site on your computer, open `index.html` in your browser.

[GitHub's browser upload guide](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
