import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const TERMS: string = `
TERMS and CONDITIONS

1. Acceptance of terms and conditions: By accessing and using this website, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you should not use this website.

2. Changes to terms and conditions: We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this website. You are responsible for regularly reviewing these terms and conditions to stay informed of any changes. Your continued use of this website after any changes have been made will constitute your acceptance of the revised terms and conditions.

3. Use of website: You may use this website for lawful purposes only. You may not use this website in any way that could damage, disable, or impair the website or interfere with any other party's use and enjoyment of the website.

4. Intellectual property: All content on this website, including text, images, graphics, and software, is the property of Forthmedia, Inc. or its licensors and is protected by copyright and other intellectual property laws. You may not use any content on this website for commercial purposes without the express written permission of Forthmedia, Inc.

5. Disclaimer of warranties: This website is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of this website or the information, content, materials, or products included on this website. We do not warrant that this website or its content will be error-free or that defects will be corrected.

6. Limitation of liability: We will not be liable for any damages of any kind arising from the use of this website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.

7. Indemnification: You agree to indemnify and hold Forthmedia, Inc. and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of this website, your violation of these terms and conditions, or your violation of any rights of another.

8. Governing law: These terms and conditions shall be governed by and construed in accordance with the laws of the State of California.

9. Dispute resolution: Any dispute arising out of or in connection with these terms and conditions shall be resolved through negotiations in good faith. If a resolution cannot be reached, either party may bring the matter to Judicial Arbitration in Santa Clara County, California, United States.

10. Miscellaneous: These terms and conditions constitute the entire agreement between you and Forthmedia, Inc. and govern your use of this website. If any provision of these terms and conditions is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect.
`;

const PRIVACY: string = `
PRIVACY POLICY

1. Introduction: We are committed to protecting the privacy of our users. This privacy policy explains how we collect, use, and protect the personal information of users of our website Forthmedia.

2. Collection of personal information: We may collect personal information from users of our website in a variety of ways, including through online forms, subscriptions, and other interactions with our website. The personal information we collect may include name, email address, telephone number, and other contact information.

3. Use of personal information: We may use the personal information we collect for a variety of purposes, including to provide services and support to our users, to communicate with our users, and to improve our website and services. We may also use personal information for marketing purposes, but we will only do so with the explicit consent of the user.

4. Protection of personal information: We take the protection of personal information seriously and have implemented appropriate technical and organizational measures to safeguard the personal information we collect. We also have policies and procedures in place to ensure that personal information is only accessed by authorized personnel for legitimate business purposes.

5. Sharing of personal information: We may share personal information with third parties in certain circumstances, such as with service providers who assist us in operating our website and providing our services. We may also disclose personal information as required by law, such as in response to a subpoena or other legal process.

6. User rights and choices: Users have the right to access, correct, or delete their personal information at any time. Users also have the right to withdraw their consent to the collection and processing of their personal information, or to object to the processing of their personal information for certain purposes. To exercise these rights, users may contact us using the contact information provided below.

7. Changes to this privacy policy: We reserve the right to modify this privacy policy at any time. Any changes will be effective immediately upon posting on this website. We encourage users to review this privacy policy regularly to stay informed of any changes.

COOKIE POLICY

1. Introduction: We use cookies and other tracking technologies to collect information about our users and their usage of our website. This cookie policy explains what cookies are, how we use them, and how users can control them.

2. What are cookies: Cookies are small text files that are placed on a user's device when they visit a website. Cookies can be used to store a variety of information, such as preferences and site usage data.

3. How we use cookies: We use cookies to personalize and enhance the user experience on our website, to analyze site usage and traffic, and to serve targeted advertising.

4. Controlling cookies: Most web browsers allow users to control cookies through their browser settings. Users can choose to accept all cookies, to be notified when a cookie is set, or to reject all cookies. Please note that rejecting cookies may affect the functionality of our website.

5. Changes to this cookie policy: We reserve the right to modify this cookie policy at any time. Any changes will be effective immediately upon posting on this website. We encourage users to review this cookie policy regularly to stay informed of any changes.

If you have any questions about our privacy and cookie policy, please contact us using the information provided below.

Contact Information:
Forthmedia, Inc.
1654 Blossom Hill Road, San Jose, CA 95124
info@forth-media.com
`;

@Component({
  selector: 'fm-info',
  templateUrl: './fm-info.component.html',
  styleUrls: ['./fm-info.component.scss']
})
export class FmInfoComponent implements OnInit {
  terms = TERMS;
  privacy = PRIVACY;
  doc: string|null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.doc = this.route.snapshot.queryParamMap.get('doc');

    if (this.doc === 'privacy') {
      this.doc = this.privacy;
    } else if (this.doc === 'terms') {
      this.doc = this.terms;
    }
  }
}
