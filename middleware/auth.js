export default function (context) {
  if (!context.app.store.state.auth.isUserAuthed) {
    return context.redirect('/')
  }
}
