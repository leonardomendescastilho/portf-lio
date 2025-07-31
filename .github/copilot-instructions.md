# GitHub Copilot Custom Instructions for Personal Portfolio Project

## Project Overview

This is a personal portfolio website designed to showcase my skills, projects, and professional experience. The primary goal is to provide a clean, modern, professional, and sober aesthetic. It will serve as an online curriculum vitae and a platform to highlight my development expertise.

---

## Core Principles & Best Practices

The codebase strictly adheres to the following software engineering principles:

- **KISS (Keep It Simple, Stupid):** Solutions should be as simple as possible without sacrificing functionality. Avoid unnecessary complexity.
- **SOLID Principles:**
  - **Single Responsibility Principle (SRP):** Each module, class, or function should have only one reason to change.
  - **Open/Closed Principle (OCP):** Software entities should be open for extension, but closed for modification.
  - **Liskov Substitution Principle (LSP):** Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
  - **Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use.
  - **Dependency Inversion Principle (DIP):** Depend upon abstractions, not concretions.
- **DRY (Don't Repeat Yourself):** Avoid duplicating code or logic. Promote reusable components, functions, and hooks.
- **Clean Code:** Prioritize readability, maintainability, and clear naming conventions. Code should be self-documenting whenever possible. Functions should be small and do one thing well.
- **YAGNI (You Aren't Gonna Need It):** Implement only the functionality that is currently required. Avoid premature optimization or adding features that might be needed in the future.

---

## Codebase Structure & Conventions

The project follows a component-based architecture with a clear separation of concerns, inspired by the MVVM pattern for pages and standard React community conventions.

- **TypeScript First:** All code is written in TypeScript. Prioritize strong typing, clear interfaces (`models`), and type safety.
- **Folder Structure:**
  - `src/components/`: **Reusable UI Components.** This directory houses all reusable React components.
    - **For simple, presentational components:** Place them directly, e.g., `src/components/Button.tsx`, `src/components/Card.tsx`.
    - **For complex components (requiring interface + logic + business rules):** Create a dedicated folder following the pattern `src/components/[ComponentName]/`.
      - `[ComponentName]View.tsx`: Represents the UI of the component (the "View"). It should be primarily responsible for rendering and composing sub-components, receiving data and callbacks from its ViewModel. Avoid complex business logic here.
      - `[ComponentName]ViewModel.ts`: Contains the state management, business logic, and data orchestration specific to this complex component. It should interact with services and prepare data for the View.
      - `[ComponentName]Model.ts`: Defines interfaces or types (the "contracts") specific to the data consumed or managed by this component.
  - `src/contexts/`: **React Contexts.** Contains context providers and consumers for global state management or theme settings.
  - `src/hooks/`: **Custom React Hooks.** Encapsulates reusable stateful logic that can be shared across components or pages, adhering to the DRY principle.
  - `src/services/`: **Data Services.** Modules responsible for data fetching, API interactions, and any data transformation before it reaches the ViewModels. This layer abstracts the data source.
  - `src/utils/`: **Utility Functions.** Houses pure helper functions that perform common tasks and are not tied to React components or specific business logic.
  - `src/assets/`: **Static Assets.** Contains images, fonts, icons, and other static media files.
  - `src/config/`: **Global Configurations.** Stores application-wide settings, constants, and environment variable configurations.
  - `src/pages/[PageName]/`: **Page-Specific Components and Logic.** Similar to complex components, but at the page level.
    - `[PageName]View.tsx`: The primary UI for the page.
    - `[PageName]ViewModel.ts`: The business logic and data orchestration for the page.
    - `[PageName]Model.ts`: Defines interfaces or types specific to the data consumed or managed by this page.
  - `src/App.tsx`: The root component of the application.
  - `src/main.tsx`: The entry point for the React application (e.g., ReactDOM.render).

---

## Technologies and Libraries

The project leverages the following key technologies and libraries. Ensure all generated code and suggestions are compatible with their latest stable versions and follow their respective best practices.

- **Vite:** Modern frontend tooling for a fast development experience. [Documentation](https://vitejs.dev/)
- **React 19:** Functional components, Hooks, and modern React patterns. [Documentation](https://react.dev/reference/react)
- **TypeScript:** Strict typing for enhanced code quality and maintainability.
- **Tailwind CSS 4.1:** Utility-first CSS framework for rapid and consistent styling. Prioritize Tailwind classes over custom CSS files. [Documentation](https://tailwindcss.com/)
- **Shadcn UI:** Component library built on Radix UI and Tailwind CSS. Prefer using and extending Shadcn components where applicable for UI elements. [Documentation](https://ui.shadcn.com/)
- **Framer Motion:** For declarative, production-ready animations. Utilize its features for smooth transitions and interactive elements. [Documentation](https://motion.dev/)

---

## Naming Conventions

- **Files:** `PascalCase` for React components (`MyComponent.tsx`), `camelCase` for hooks (`useMyHook.ts`), and `kebab-case` for utility files (`my-utility.ts`).
- **Variables/Functions:** `camelCase`.
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `API_BASE_URL`).
- **Types/Interfaces:** Use `Model.ts` and `ViewModel.ts` files to define interfaces and types. Within these files, name interfaces with `PascalCase` (e.g., `User`, `Project`, `UserViewModel`). **Avoid using the `I` prefix for interfaces.**
- **CSS Classes (if custom):** `kebab-case`.
  -- **Components Export:** All components should be exported as export default from their respective files. For example, `export default MyComponent;` in `MyComponent.tsx`. This ensures a consistent import style across the codebase.
- **Hooks:** Custom hooks should be prefixed with `use` (e.g., `useFetchData`, `useFormHandler`).
- **Context Providers:** Should be named with the `Context` suffix (e.g., `ThemeContext`, `AuthContext`).

---

## Coding Style

- Use ESLint and Prettier for consistent formatting.
- Prefer `const` over `let` when variables are not reassigned.
- Avoid `any` type in TypeScript. Use specific types or `unknown` with type assertions.
- Write clear, concise comments only when necessary to explain _why_ something is done, not _what_ it does.
- Ensure accessibility (A11y) is considered in UI components (e.g., ARIA attributes).
- **Function Documentation:** Every function, component, or hook definition must include a JSDoc-style comment block at its beginning, explaining its purpose, parameters, and return value (if any).
  - Example:
    ```typescript
    /**
     * @function calculateTotalPrice
     * @description Calculates the total price of items in a shopping cart, applying a discount.
     * @param {Array<Object>} items - An array of item objects, each with 'price' and 'quantity'.
     * @param {number} discountPercentage - The percentage discount to apply (e.g., 0.10 for 10%).
     * @returns {number} The total calculated price after discount.
     */
    const calculateTotalPrice = (
      items: { price: number; quantity: number }[],
      discountPercentage: number
    ): number => {
      // ... implementation
    };
    ```

---

## Response Guidelines for Copilot

When providing code, explanations, or assistance, always follow these additional steps:

1.  **Step-by-Step Breakdown:** After completing a request, provide a clear, concise, and didactic step-by-step explanation of what was done, why it was done, and how it adheres to the project's principles and structure. This should be like a senior developer guiding a junior one.
2.  **Final Summary:** Conclude the response with a small, important summary highlighting the key takeaways or the main achievement of the delivered task. This summary should reinforce understanding and provide a quick overview of the solution.

## Project Requirements

Detailed functional and non-functional requirements for this project are documented in the `requirements.md` file located in the `.github/` directory. All generated code and suggestions must align with these specified requirements, ensuring the final product meets the design, functionality, and performance expectations. Refer to `/.github/requirements.md` for the complete list of features and constraints.

---
