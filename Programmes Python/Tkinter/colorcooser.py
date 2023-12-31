from tkinter.commondialog import Dialog
__all__ = ["Chooser", "askcolor"]
class Chooser(Dialog):
    command = "tk_chooseColor"
    def _fixoptions(self):
        try:
            color = self.options["initialcolor"]
            if isinstance(color, tuple):
                self.options["initialcolor"] = "#%02x%02x%02x" % color
        except KeyError:
            pass
    def _fixresult(self, widget, result):
        if not result or not str(result):
            return None, None  # canceled
        r, g, b = widget.winfo_rgb(result)
        return (r//256, g//256, b//256), str(result)
def askcolor(color=None, **options):
    if color:
        options = options.copy()
        options["initialcolor"] = color
    return Chooser(**options).show()
if __name__ == "__main__":
    print("color", askcolor())
