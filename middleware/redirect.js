export default function (params, redirect) {
  if (!params.id) {
    redirect('/')
  }
}
