import React from 'react';

export type GoogleFormPostHandlerConfig = {
  /** The ID of the Google form. */
  formId: string,

  /** The field value mapping for the Google form. */
  getEntries: () => Promise<{ [key: string]: string }>,

  /**
   * Action to run to determine if we should submit the form.
   * Useful to ensure all required fields are filled out and report
   * an error otherwise.
   */
  precondition: () => Promise<boolean>,

  /** Notify user of success. */
  onSuccess: () => Promise<void>,

  /** Notify user of failure. */
  onFailure: () => Promise<void>
}

export function mkGoogleFormPostHandler(config: GoogleFormPostHandlerConfig) {
  return async (e: React.UIEvent) => {
    e.preventDefault()
    let ok = await config.precondition()
    if (!ok) return
    let entries = await config.getEntries()
    const data = new URLSearchParams();
    Object.entries(entries).forEach(([k, v]) =>
      data.append(k, v)
    )
    const url = `https://docs.google.com/forms/u/0/d/e/${config.formId}/formResponse`
    try {
      let res = await fetch(url, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      })
      // TODO: We need to use a CORS proxy so we can read the response and indicate if there was an error.
      // if (res.ok) {
      await config.onSuccess()
      // } else {
      //   await config.onFailure()
      // }
    } catch (err) {
      console.log(err);
      await config.onFailure()
    }
  }
}
