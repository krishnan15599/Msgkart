import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="header">
        <img src="MsgKart 2.png" alt="MsgKart Logo" class="logo-image">
      </div>
      <div class="content">
        <button class="plans-button">Plans & Pricing</button>
        <h1>Flexible Plans, <br> Powerful Solutions</h1>
        <p>Choose the perfect plan tailored to your business needs. Whether you're an SME or an enterprise, MsgKart offers scalable solutions to enhance customer engagement and streamline operations.</p>
      </div>

      <div class="pricing-cards">
        <div class="card">
          <h3  class="card-head">Engage</h3>
          <p class="intro-text">Built for small teams to accelerate sales and streamline customer interactions on WhatsApp.</p>
          <p class="price">₹ 999 <span>per month billed annually</span></p>
          <div class="divider"></div>
          <p class="card-description">Everything in Engage</p>
          <ul>
            <li>2 Agent Logins</li>
            <li>1000 messages per day limit</li>
            <li>Chat Tool</li>
          </ul>
          <button class="get-started get-started-engage">Get Started</button>
        </div>

        <div class="card popular">
          <span class="badge">Most  Popular</span>
          <h3 class="card-head">Emerge</h3>
          <p class="intro-text">Best for fast-growing businesses to expedite sales with automated WhatsApp conversations.</p>
          <p class="price">₹ 2999 <span>per month billed annually</span></p>
          <div class="divider"></div>
          <p class="card-description">Everything in Emerge</p>
          <ul>
            <li>5 Agent Logins</li>
            <li>3000 messages per day limit</li>
            <li>Chat Tool</li>
            <li>Simple Chatbot (3 Levels)</li>
            <li>All Agents</li>
          </ul>
          <button class="get-started">Get Started</button>
        </div>

        <div class="card">
          <h3 class="card-head">Elevate</h3>
          <p class="intro-text">Everything an organization needs to improve and scale its business effectively on WhatsApp.</p>
          <p class="price">₹ 6999 <span>per month billed annually</span></p>
          <div class="divider"></div>
          <p class="card-description">Everything in Elevate</p>
          <ul>
            <li>15 Agent Logins</li>
            <li>7000 messages per day limit</li>
            <li>Chat Tool</li>
            <li>3 Complex Chatbots</li>
            <li>All Agents</li>
          </ul>
          <button class="get-started">Get Started</button>
        </div>

        <div class="card card-meta">
          <h3 class="card-head">Meta</h3>
          <p class="intro-text meta">Charges as per actuals </p>
          <p class="intro-text">All conversations within a 24-hour window.</p>
          <ul>
            <li>Utility = ₹ 0.115</li>
            <li>Marketing = ₹ 0.7846</li>
            <li>User Initiated = ₹ 0.2906</li>
            <li>1000 customer-initiated conversations free per month</li>
          </ul>
          <button class="get-started">Get Started</button>
        </div>
      </div>
      
        <div class="pricing-features">
          <h2 class="features-title">All pricing plans include:</h2>
          <div class="features-list">
            <div class="feature">
              <span class="feature-checkmark">✔</span> Contact Management
            </div>
            <div class="feature">
              <span class="feature-checkmark">✔</span> Broadcast Management
            </div>
            <div class="feature">
              <span class="feature-checkmark">✔</span> WhatsApp Catalog
            </div>
            <div class="feature">
              <span class="feature-checkmark">✔</span> Shared Team Inbox
            </div>
            <div class="feature">
              <span class="feature-checkmark">✔</span> Template Submission
            </div>
            <div class="feature">
              <span class="feature-checkmark">✔</span> Green Tick Verification
            </div>
          </div>
        </div>
    </div>
  `,
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {}
