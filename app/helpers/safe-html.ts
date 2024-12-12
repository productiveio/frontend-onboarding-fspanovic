import { helper } from '@ember/component/helper';
import { htmlSafe, type SafeString } from '@ember/template';

interface SafeHtmlSignature {
  Args: {
    Positional: [note: string];
      Named: Record<string, unknown>;
    };
  Return: SafeString;          
}

export default helper<SafeHtmlSignature>(function safeHtml([note]) {
  return htmlSafe(note);
});
  