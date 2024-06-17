import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "StarBucks Menu - Terms-&-Conditions",
  description: "Generated by create next app",
  icons: {
    icon: ["/icon.ico?v=4"],
    apple: ["/icon.io?v=4"],
    shortcut: ["icon.io"],
  },
};

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-[20px] md:px-[100px] py-8 prose">
      <h1 className="text-center font-bold text-3xl mb-3">
        Starbucks Menu with Prices - Terms and Conditions
      </h1>
      <p>Welcome to the Starbucks Menu with Prices website!</p>
      <p className="mb-4">
        By accessing or using this website, you agree to be bound by these terms
        and conditions (&quot;Terms&quot;) and all applicable laws and
        regulations.
      </p>

      <h3 className="text-xl font-bold">Information Provided</h3>

      <p className="mb-4">
        This website provides information about Starbucks menu items and their
        prices. We make reasonable efforts to ensure the accuracy of the
        information, but we cannot guarantee it. Prices may vary depending on
        your location and other factors. We reserve the right to modify the menu
        and pricing at any time without prior notice.
      </p>

      <h3 className="text-xl font-bold">Use of the Website</h3>
      <p className="mb-4">
        This website is for your personal, non-commercial use only. You may not
        modify, copy, distribute, transmit, display, perform, reproduce,
        publish, license, create derivative works from, transfer, or sell any
        information or content obtained from this website.
      </p>

      <h3 className="text-xl font-bold">Disclaimer</h3>

      <p className="mb-4">
        THE INFORMATION AND CONTENT ON THIS WEBSITE ARE PROVIDED &quot;AS
        IS&quot; WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
        LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THE ACCURACY,
        COMPLETENESS, OR RELIABILITY OF THE INFORMATION.
      </p>

      <h3 className="text-xl font-bold">Limitations of Liability</h3>

      <p className="mb-4">
        IN NO EVENT SHALL WE OR ANY THIRD PARTIES BE LIABLE FOR ANY DAMAGES
        (INCLUDING, WITHOUT LIMITATION, DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF
        PROFITS, BUSINESS INTERRUPTION, LOSS OF DATA, OR OTHER INTANGIBLE
        LOSSES) ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE
        THE WEBSITE OR THE CONTENT, EVEN IF WE HAVE BEEN ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES.
      </p>

      <h3 className="text-xl font-bold">Governing Law</h3>

      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the
        laws of the State of [Your State] without regard to its conflict of law
        provisions.
      </p>

      <h3 className="text-xl font-bold">Changes to the Terms</h3>

      <p className="mb-4">
        We reserve the right to modify these Terms at any time without prior
        notice. We will post any changes on this page. You are responsible for
        checking these Terms periodically for changes. Your continued use of the
        website after the posting of any changes constitutes acceptance of those
        changes.
      </p>

      <h3 className="text-xl font-bold">Contact Us</h3>

      <p className="mb-4">
        If you have any questions about these Terms, please contact us at [Your
        Email Address] or [Your Phone Number] (if applicable).
      </p>
    </div>
  );
};

export default TermsAndConditions;
