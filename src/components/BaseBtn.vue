<template>
  <button class="btn">
    <slot name="text-btn"></slot>

  </button>
</template>

<style lang="scss">
$bp-md: 980px;

.btn {
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 10px;
  margin: 0 auto;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  transition:
    color 150ms,
    background 150ms;

  &--white {
    background-color: #ffffff;
    color: var(--c-cool-blue-2);
    border: 1px solid var(--c-cool-blue-2);
    padding: 14px 16px;
    & svg {
      color: var(--c-cool-blue-2);
    }
  }
  &--brown {
    background-color: #ffffff;
    color: var(--c-umber-2);
    border: 1px solid #fff;
     & svg {
      color: var(--c-umber-2);
    }
  }
  &--blue {
    background-color: var(--c-cool-blue-3);
    color: #ffffff;
    border: 1px solid var(--c-cool-blue-3);
    & svg {
      color: #ffffff;
    }
  }
}
.btn svg {
  transition: color 150ms;
}
@media (hover: hover) {
  .btn--brown:hover {
    color: #ffffff;
    background-color: var(--c-umber-2);
  }
  .btn--brown:hover svg {
    color: #ffffff;
  }
  .btn--blue:hover {
    color: var(--c-cool-blue-3);
    background-color: #ffffff;
  }
  .btn--blue:hover svg {
    color: var(--c-cool-blue-3);
  }

  .btn--white:hover {
    color: #ffffff;
    background-color: var(--c-cool-blue-3);
  }
  .btn--white:hover svg {
    color: #ffffff;
  }
}
</style>
