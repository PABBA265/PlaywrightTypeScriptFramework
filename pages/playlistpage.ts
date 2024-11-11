import { Page, expect } from '@playwright/test';

export class PlaylistPage {
  private page: Page;
  private videoLink;

  constructor(page: Page) {
    this.page = page;
    this.videoLink = page.locator('#container > #thumbnail');
  }

  async clickOnVideo() {
    await this.page.waitForTimeout(3000); // Consider removing this if `expect` handles waiting
    await expect(this.videoLink.first()).toBeVisible({ timeout: 10000 }); // Use toBeVisible for more robustness
    await this.videoLink.first().click();
  }
}
