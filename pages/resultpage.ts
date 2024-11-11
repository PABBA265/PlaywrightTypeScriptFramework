import { Page, expect } from '@playwright/test';

export class ResultPage {
  private page: Page;
  private playlistLink;

  constructor(page: Page) {
    this.page = page;
    // Locates the link with the role and name, assuming it matches exactly one unique element.
    this.playlistLink = page.getByRole('link', { name: 'Playwright by Testers Talk' });
  }

  async clickOnPlaylist() {
    // Waits for the playlist link to be visible before clicking.
    await expect(this.playlistLink.first()).toBeVisible({ timeout: 10000 });
    await this.playlistLink.first().click();
  }
}

