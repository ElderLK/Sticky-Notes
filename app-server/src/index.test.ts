jest.mock("./fn/config/config");

import { app } from ".";

test("notificationApiWorkerProcessBatch must be exported", () => {
  expect(app).toBeDefined();
});
