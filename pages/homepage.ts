import { Page, expect } from '@playwright/test';

export class HomePage {
  private page: Page;
  private searchTextbox;

  constructor(page: Page) {
    this.page = page;
    this.searchTextbox = page.locator('#APjFqb');
  }

  async goto() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
    await this.page.goto(process.env.URL || ''); // Default to an empty string if URL is undefined
  }

  async searchKeywords(param1: string) {
    await expect(this.searchTextbox).toBeEnabled({ timeout: 10000 }); // Add timeout for robustness
    await this.searchTextbox.click();
    await this.searchTextbox.fill(param1);
    await this.searchTextbox.press('Enter');
  }
}

