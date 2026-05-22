// Auto-generated from config/project-mapping.json — do not edit manually
import { test, expect } from '@playwright/test';

const APPS = [
  {
    "name": "WavedIn — WavedIn (Play Store)",
    "store": "play",
    "id": "com.waivedin"
  },
  {
    "name": "WavedIn — WavedIn (App Store)",
    "store": "app",
    "id": "id6451483729"
  },
  {
    "name": "Algomax — AlgoMax (Play Store)",
    "store": "play",
    "id": "com.algomax"
  },
  {
    "name": "Algomax — AlgoMax (App Store)",
    "store": "app",
    "id": "https://apps.apple.com/in/app/algomax/id6498886667"
  },
  {
    "name": "AutoChecker — AutoChecker (Play Store)",
    "store": "play",
    "id": "com.autochecker"
  },
  {
    "name": "Auto eVantage — Auto eVantage (Play Store)",
    "store": "play",
    "id": "com.autoevantage"
  },
  {
    "name": "Auto eVantage — Auto eVantage (App Store)",
    "store": "app",
    "id": "id6747385992"
  },
  {
    "name": "Spark me — Spark Me (Play Store)",
    "store": "play",
    "id": "com.adhash.sparkme"
  },
  {
    "name": "Spark me — Spark Me (App Store)",
    "store": "app",
    "id": "id1578660405"
  },
  {
    "name": "SMC — Send Movie Clips (Play Store)",
    "store": "play",
    "id": "com.smclips"
  }
];

for (const app of APPS) {
  test(`App Status: ${app.name}`, async ({ request }) => {
    const url = app.store === 'play'
      ? `https://play.google.com/store/apps/details?id=${app.id}`
      : `https://apps.apple.com/app/${app.id}`;
    const res = await request.get(url, { timeout: 30000, failOnStatusCode: false });
    expect(res.status(), `${url} returned ${res.status()}`).toBeLessThan(400);
  });
}
