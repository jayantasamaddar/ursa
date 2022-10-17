export const getSelectionText = (start?: number, end?: number) => {
  let text: string | undefined = '';
  const activeEl = document.activeElement as
    | HTMLInputElement
    | HTMLTextAreaElement;
  const tag = activeEl ? activeEl.tagName.toLowerCase() : null;
  if (
    tag == 'textarea' ||
    (tag == 'input' &&
      /^(?:text|email|search|number|password|tel|url|date|datetime-local|time|month|week|currency)$/i.test(
        (activeEl as HTMLInputElement).type
      ))
  ) {
    text = activeEl.value.slice(
      Number(start) ?? activeEl.selectionStart,
      Number(end) ?? activeEl.selectionEnd
    );
  } else if (global.window.getSelection) {
    text = global.window.getSelection()?.toString();
  }
  return text;
};
