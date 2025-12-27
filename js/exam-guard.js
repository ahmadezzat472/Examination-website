// Lock browser history and prevent navigation
let examLocked = true;

// Function to unlock when exam is finished
window.unlockExam = function () {
  examLocked = false;
};

// Push multiple states to prevent back navigation
function lockExamPage() {
  for (let i = 0; i < 100; i++) {
    history.pushState({ page: i }, "", location.href);
  }
}
lockExamPage();

// Handle back/forward attempts
window.addEventListener("popstate", function (event) {
  if (examLocked) {
    lockExamPage();
  }
});

// Override history methods to prevent manipulation
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

history.pushState = function (...args) {
  if (
    examLocked &&
    args[2] &&
    !args[2].includes("result") &&
    !args[2].includes("timeout")
  ) {
    return;
  }
  return originalPushState.apply(history, args);
};

history.replaceState = function (...args) {
  if (
    examLocked &&
    args[2] &&
    !args[2].includes("result") &&
    !args[2].includes("timeout")
  ) {
    return;
  }
  return originalReplaceState.apply(history, args);
};

// Prevent page refresh/unload
const unloadMessage = "Exam in progress. You cannot leave this page.";

window.addEventListener("beforeunload", function (e) {
  if (examLocked) {
    e.preventDefault();
    e.returnValue = unloadMessage;
    return unloadMessage;
  }
});

// Block all keyboard shortcuts that can cause navigation/reload
document.addEventListener(
  "keydown",
  function (e) {
    if (!examLocked) return;

    // F5 - reload
    if (e.key === "F5") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+R / Cmd+R - reload
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "r") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+W / Cmd+W - close tab
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "w") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+W / Cmd+Shift+W - close window
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "w") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Alt+Left / Alt+Right - browser back/forward
    if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Cmd+[ / Cmd+] - Mac back/forward
    if (e.metaKey && (e.key === "[" || e.key === "]")) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  },
  true
);

// Block right-click context menu (which allows reload)
document.addEventListener(
  "contextmenu",
  function (e) {
    if (examLocked) {
      e.preventDefault();
      return false;
    }
  },
  true
);

// Prevent navigation by clicking links
document.addEventListener(
  "click",
  function (e) {
    const target = e.target.closest("a");
    if (target && target.href && !target.href.includes("javascript")) {
      if (!target.id || !target.id.includes("submit")) {
        e.preventDefault();
        return false;
      }
    }
  },
  true
);

// Prevent drag and drop navigation
document.addEventListener("dragover", function (e) {
  if (examLocked) {
    e.preventDefault();
    return false;
  }
});

document.addEventListener(
  "drop",
  function (e) {
    if (examLocked) {
      e.preventDefault();
      return false;
    }
  },
  true
);

// Monitor for visibility changes
document.addEventListener("visibilitychange", function () {
  if (examLocked && document.hidden) {
    console.log("User left tab - exam locked");
  }
});
