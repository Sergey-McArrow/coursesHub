// namespace UserManagement {
// export namespace Admin {
export class AdminUser {
  constructor(
    public name: string,
    public email: string,
    private isSuperAdmin: boolean = false
  ) {}

  public getSuperAdminStatus(): boolean {
    return this.isSuperAdmin;
  }

  public grantSuperAdminRights(): void {
    this.isSuperAdmin = true;
  }

  public revokeSuperAdminRights(): void {
    this.isSuperAdmin = false;
  }
}
