# Finance AI

**Finance AI** is a cutting-edge financial management platform designed to help users track and analyze their financial transactions effortlessly. Powered by artificial intelligence, this SaaS platform offers insightful dashboards, transaction tracking, and subscription plans to unlock advanced features like unlimited transactions and personalized AI financial reports.

---

## 🚀 Features

1. **Transaction Management**

   - Add transactions by selecting:
     - **Category** (e.g., Food, Transportation, Utilities)
     - **Payment Method** (e.g., Credit Card, Cash)
     - **Type** (Deposit, Expense, or Investment)
   - View a list of all transactions on the dedicated Transactions page.

2. **Dashboard**

   - Visualize financial data with:
     - Grouping by categories.
     - A summary of current finances.
     - Charts and insights to track expenses.

3. **Subscription Plans**

   - **Basic Plan**: Free, limited to 10 transactions per month.
   - **Premium Plan**: Unlimited transactions and AI-powered financial reports for R$19/month.

4. **AI Financial Reports**

   - Integrated with ChatGPT to provide personalized insights into your finances.
   - Available for Premium subscribers.

5. **Secure Authentication and Payments**
   - User authentication via [Clerk](https://clerk.dev/).
   - Payments managed through [Stripe](https://stripe.com/).

---

## 🛠️ Technologies Used

This project leverages a robust stack of modern technologies:

### **Frontend**

- **[Next.js](https://nextjs.org/)** (14.2.16): React-based framework for fast and scalable web applications.
- **[Tailwind CSS](https://tailwindcss.com/)** (3.4.1): Utility-first CSS framework for styling.
- **[ShadCN](https://ui.shadcn.com/)**: Beautifully designed components that you can copy and paste into your apps.
- **[React Hook Form](https://react-hook-form.com/)**: Simplified form handling.
- **[Recharts](https://recharts.org/)**: Data visualization and charting library.
- **[Lucide](https://lucide.dev/)**: Icon library for modern designs.

### **Backend**

- **[Prisma](https://www.prisma.io/)** (5.21.1): ORM for database queries and migrations.
- **[OpenAI API](https://openai.com/api/)**: ChatGPT integration for AI-powered financial insights.
- **[Neon](https://neon.tech/)** Ship faster with Postgres.
- **[Stripe](https://stripe.com/)**: Payment gateway for subscription management.

### **Authentication**

- **[Clerk](https://clerk.dev/)** (5.7.5): Secure and seamless user authentication.

### **Development Tools**

- **TypeScript** (5.x): Static typing for scalable code.
- **Husky** (9.1.6): Git hooks for maintaining quality.
- **Lint-Staged** (12.3.2): Pre-commit checks for linting.
- **Prettier** (3.3.3): Code formatting.
- **ESLint** (8.x): JavaScript linting.
- **Tailwind Merge**: Utility for merging Tailwind classes efficiently.

---

## 📚 Pages Overview

1. **Home/Dashboard**

   - Displays aggregated financial insights and charts.
   - Shows the current balance, grouped expenses, and more.

2. **Transactions**

   - List of all user transactions.
   - Filter and sort by categories, payment methods, and types.

3. **Subscription**

   - Choose between Free and Premium plans.
   - Integrated Stripe payment system for seamless upgrades.

4. **Login/Authentication**
   - Powered by Clerk for secure login and user management.

---

## 💳 Subscription Details

- **Basic Plan**

  - Free of charge.
  - Limited to **10 transactions per month**.

- **Premium Plan**
  - **R$19/month**.
  - Unlimited transactions.
  - Free AI-generated financial insights via ChatGPT.

---

## 📦 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/finance-ai.git
   cd finance-ai
   ```

2. Install dependencies:
   ```bash
   git clone https://github.com/yourusername/finance-ai.git
   cd finance-ai
   ```
3. Set up enviroment variables:
   ```bash
    NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_api
    CLERK_API_KEY=your_clerk_api_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    STRIPE_PREMIUM_PLAN_PRICE_ID=your_stripe_id_plan
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_PUBLIC_KEY=your_stripe_public_key
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_next_public_stripe_publishable_key
    OPENAI_API_KEY=your_openai_api_key
    DATABASE_URL=your_database_url
    APP_URL=the_app_url_for_deploy
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```

---

## 🧑‍💻 Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the production server.
- **`npm run prepare`**: Prepares the project by generating Prisma client and setting up Husky hooks.

---

## 🌟 Future Enhancements

- Add expense forecasting based on historical data.
- Improove a mobile-first design for seamless usability.
- Enable sharing financial reports with third parties.
- Support for additional currencies and localization.

---
